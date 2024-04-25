const { Schema, model, Types } = require('mongoose');

const EasterEggSchema = new Schema(
    
    {

        user : {
            type : Schema.Types.ObjectId,
            ref : 'User',
        },

        pokemon : [
            { type: Object }
        ],

        active : [
            { type: Object }
        ],

        saveState : {
            type: Number,
            default: 0
        }

    },

    {
        toJSON: {
            virtuals : true,
            getters : true
        },
    }

);

EasterEggSchema.virtual('count').get(function() { return this.pokemon.length; });

EasterEggSchema.pre('save', function(next) {

    this.active = (this.pokemon.length >= 6) ? this.pokemon.slice(0, 6) : this.active;
    next();

});

const EasterEgg = model('EasterEgg', EasterEggSchema);

module.exports = EasterEgg;