const express = require("express");
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const cors = require("cors");
const multer = require('multer');

const connect = require('./config/connection');
// meh might want both
const sess = require('./utils/session-service');
const { strategy } = require('./utils/auth');
const { localTest } = require('./utils/upload-service');

const app = express();
const upload = multer({ localTest });

const PORT = process.env.PORT || 8080;

passport.use(strategy);
app.use(passport.initialize());

app.use(cors());

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join('public')));
app.use('/api', require('./routes'));

connect()
    .then(() => app.listen(PORT, () => console.log(`- - - Express server listening on port: ${PORT}`)))
    .catch((err) => console.log(err))