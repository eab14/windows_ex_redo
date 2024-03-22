const express = require("express");
const path = require('path');
const passport = require('passport');
const cors = require("cors");
const multer = require('multer');

const connect = require('./config/connection');
const { strategy } = require('./utils/auth');
const { localTest } = require('./utils/upload-service');

const app = express();
const upload = multer({ localTest });

const PORT = process.env.PORT || 8080;

app.use(cors());

passport.use(strategy);
app.use(passport.initialize());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join('public')));
app.use('/api', require('./routes'));

connect()
    .then(() => app.listen(PORT, () => console.log(`- - - Express server listening on port: ${PORT}`)))
    .catch((err) => console.log(err))