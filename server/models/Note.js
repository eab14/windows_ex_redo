const { Schema, model, Types } = require('mongoose');

const NoteSchema = new Schema(
    
    {

        user : {
            type : Schema.Types.ObjectId,
            ref : 'User',
        },

        date : {
            type: Date,
            required: true
        },

        body : {
            type: String,
            required: true
        },

        time : {
            type: Number,
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

const Note = model('Note', NoteSchema);

module.exports = Note;