const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const { isEmailValid } = require('../utils/helpers');

const UserSchema = new Schema(
    
    {
        
        username : {
            type : String,
            required : 'Username is Required',
            trim : true,
            unique : true
        },

        name : {
            type: String,
        },

        email : {
            type : String,
            required : 'E-mail is Required',
            trim : true,
            validate : [ isEmailValid, 'E-mail is not valid.' ],
            unique : true
        },
        
        password : {
            type : String,
            required : 'Password is Required',
        },

        admin : {
            type: Boolean,
            default: false
        },

        avatar : {
            type: String,
            default: "image url goes here..."
        },

        location : {
            type: String,
            default: "Toronto, CA"
        },

        settings : {
            type: Object,
            default: { 
                theme: "default",
                wallpaper : "image url goes here",
                nav: [ "Account", "Files", "Messages", "Terminal", "Database", "Settings" ], 
                max: [ "Account", "Files" ], 
                min: [ "Weather", "Messages", "Database", "Settings" ] 
            }
        }

    },

    {
        toJSON: {
            virtuals : true,
            getters : true
        },
    }

);

UserSchema.pre('save', async function save(next) {

    if (!this.isModified('password')) return next();

    try {

        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        return next();

    } catch (err) { return next(err); }

});

UserSchema.methods.validatePassword = function validatePassword(data) { return bcrypt.compareSync(data, this.password) };
const User = model('User', UserSchema);

module.exports = User;