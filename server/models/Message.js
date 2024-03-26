const { Schema, model, Types } = require('mongoose');

const MessageSchema = new Schema(
    
    {

        sender : {
            type : Schema.Types.ObjectId,
            ref : 'User',
        },

        recipients : [
            {
                type : Schema.Types.ObjectId,
                ref : 'User',
            }
        ],

        body : {
            type: String,
            required: true
        },

        group : {
            type: Boolean,
            default: false
        },

        date : {
            type: Date,
            required: true,
            default: Date.now()
        }

    },

    {
        toJSON: {
            virtuals : true,
            getters : true
        },
    }

);

const Message = model('Message', MessageSchema);

module.exports = Message;