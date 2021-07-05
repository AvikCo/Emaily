
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');


passport.serializeUser((user, done)=> {
     done(null, user.id);
});

passport.deserializeUser((id, done)=>{
     User.findById(id).then(user => {
          done(null,user);
     })
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true,  //heroku uses proxy and our call back ends be being http instead of https , conflict with google redirects
    //use proxy true makes passport to access types of proxy
    
  },  (accessToken, refreshToken, profile, done) => {  
       User.findOne({googleId: profile.id})
       .then( existingUser => {
            if (existingUser) {
               done(null, existingUser);
            } else {
               new User({googleId: profile.id})
                    .save()
                    .then(user => done(null, user));
            }
       })
      
  })
  );

  passport.use(new FacebookStrategy({
     clientID: keys.facebookAppId,
     clientSecret: keys.facebookAppSecret,
     callbackURL: '/auth/facebook/callback',
     proxy: true,
     profileFields: ['id', 'displayName', 'photos', 'email']
  }, (accessToken, refreshToken, profile, done) => {
       User.findOne({facebookId: profile.id})
          .then(existingUser =>{
               if(existingUser) done(null, existingUser   );
               else{
                    new User({facebookId: profile.id})
                         .save()
                         .then(user => done(null, user))
               }
          })
  }));
   