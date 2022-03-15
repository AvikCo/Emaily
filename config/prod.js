module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    facebookAppId:process.env.FACEBOOK_APP_ID,
    // facebookAppId:'949362742305220',
    // facebookAppSecret: 'b9d54246303182648ae4186e72367cbf',
    facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
    mongoURI:process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    redirectDomain:process.env.REDIRECT_DOMAIN
};
