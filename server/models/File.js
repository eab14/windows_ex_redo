const { Schema, model, Types } = require('mongoose');

const FileSchema = new Schema(
    
    {

        user : {
            type : Schema.Types.ObjectId,
            ref : 'User',
        },

        date : {
            type: Date,
            default: Date.now()
        },

        url : {
            type: String,
            required: true
        },

        description : {
            type: Object
        },

        type : {
            type: String,
            required: true
        },

        size : {
            type: Number,
            required: true
        },

        sharedUsers : [
            {
                type : Schema.Types.ObjectId,
                ref : 'User',
            }
        ]

    },

    {
        toJSON: {
            virtuals : true,
            getters : true
        },
    }

);

const File = model('File', FileSchema);

module.exports = File;