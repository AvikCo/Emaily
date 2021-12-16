// import express from 'express';
 const express = require('express');
 const mongoose = require('mongoose');
 const cookieSession = require('cookie-session');
 const passport = require('passport');
 const keys = require('./config/keys');
 const bodyParser = require('body-parser');
 require('./models/User');
 require('./services/passport');
 

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);  //fetches the authRoute function and directly running

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,  
  useCreateIndex: true,
  useUnifiedTopology:true,
});      

if(process.env.NODE_ENV !== 'production'){
  //Express will serve up production assets
  //like out main.js file or main.css file
  app.use(epress.static('client/build'));

  //Express will serve up index.html file if it doesn't recogniza the route
  const path = require('path');
  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);