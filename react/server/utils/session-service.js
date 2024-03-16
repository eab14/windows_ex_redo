const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

var store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: 'sessions'
});

const sess = {
    secret: 'Session.',
    resave: false,
    rolling: true,
    saveUninitialized: true,
    store,
    cookie: {
      expires: 600 * 1000
    }
};

module.exports = sess;