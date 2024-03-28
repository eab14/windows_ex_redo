const fs = require('fs');
const mongoose = require('mongoose');
const connect = require('../config/connection');
const { User, File, Message } = require('../models');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

let users, files, messages;

const initialize = () => {

    return new Promise((resolve, reject) => {

        fs.readFile("./data/users.json", "utf8", (err, data) => {

            if (!err) users = JSON.parse(data);
            else { reject("Failure reading - Users - file..."); return }

        });

        fs.readFile("./data/files.json", "utf8", (err, data) => {

            if (!err) files = JSON.parse(data);
            else { reject("Failure reading - Files - file..."); return }

        });

        fs.readFile("./data/messages.json", "utf8", (err, data) => {

            if (!err) messages = JSON.parse(data);
            else { reject("Failure reading - Files - file..."); return }

        });

        resolve();

    })
    
}

const hashPassword = async (password) => { return bcrypt.hash(password, SALT_WORK_FACTOR); };
  
const seedUsers = async () => {

    await User.deleteMany({});

    const users_hash = await Promise.all(

        users.map(async (user) => {
            const hashedPassword = await hashPassword(user.password);
            return { ...user, password: hashedPassword };
        })

    );
  
    await User.insertMany(users_hash);

}

const seedFiles = async () => {

    await File.deleteMany({});

    for (let i = 0; i < files.length; i++) {

        const query = await User.findOne({ email: files[i].user_email }).lean();
        files[i].user = (query) ? query._id : null;
        delete files[i].user_email;

    }

    await File.insertMany(files);

}

const seedMessages = async () => {

    await Message.deleteMany({});

    for (let i = 0; i < messages.length; i++) {

        const sender = await User.findOne({ email: messages[i].sender_email }).lean();
        const recipients = await User.find({ email: { $in: messages[i].recipient_email } }).lean();

        messages[i].sender = sender._id,
        messages[i].recipients = recipients;

        delete messages[i].sender_email;
        delete messages[i].recipients_email;

    }

    await Message.insertMany(messages);

}

const seedData = async () => {

    await seedUsers();
    console.log("- - - Seeded User Data from JSON - - -");
    await seedFiles();
    console.log("- - - Seeded File Data from JSON - - -");
    await seedMessages();
    console.log("- - - Seeded Message Data from JSON - - -");

    console.log('\r');

}

connect()
    .then(() => initialize())
    .then(() => seedData())
    .then(() => mongoose.connection.close())