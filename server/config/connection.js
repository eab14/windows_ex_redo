const mongoose = require('mongoose');
require('dotenv').config();

const connect = () => {
    
    return new Promise((resolve, reject) => {

        mongoose.connect(process.env.MONGO_URI, {});
        mongoose.set('debug', false);
        resolve(console.log("- - - MongoDB connection successful..."));

    })

}

module.exports = connect;