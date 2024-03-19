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

        group : {
            type: Boolean,
            default: false
        },

        date : {
            type: Date,
            required: true
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