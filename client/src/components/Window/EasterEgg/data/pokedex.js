export const pokedex = [
    {

        "id" : 1, 
        "name" : "Bulbasaur",
        "type" : "Grass",
        "stats" : {
            "hp" : 45,
            "attack" : 49,
            "defense" : 49,
            "secial" : 65,
            "speed" : 45 
        },
        "moveSet" : [
            { "name" : "Tackle", "power" : 35, "accuracy" : 95, "type" : "Normal" },
            { "name" : "Growl", "effect" : { "attribute" : "damage", "targetOpponent" : true, "effectInt" : 10 }, "accuracy" : 100, "type" : "Effect" }
        ],
        "images" : { 
            "sprite" : "./images/bulbasaur.gif", 
            "sprite_shiny" : "./images/bulbasaur-shiny.gif"
        },

    },
    {

        "id" : 4,
        "name" : "Charmander",
        "type" : "Fire",
        "stats" : {
            "hp" : 39,
            "attack" : 52,
            "defense" : 43,
            "secial" : 50,
            "speed" : 65
        },
        "moveSet" : [
            { "name" : "Scratch", "power" : 40, "accuracy" : 100, "type" : "Normal" },
            { "name" : "Growl", "effect" : { "attribute" : "attack", "targetOpponent" : true, "effectInt" : 10 }, "accuracy" : 100, "type" : "Effect" }
        ],
        "images" : { 
            "sprite" : "./images/charmander.gif", 
            "sprite_shiny" : "./images/charmander-shiny.gif" 
        },

    },
    { 

        "id" : 7,
        "name" : "Squirtle",
        "type" : "Water",
        "stats" : {
            "hp" : 44,
            "attack" : 48,
            "defense" : 65,
            "secial" : 50,
            "speed" : 43
        },
        "moveSet" : [
            { "name" : "Tackle", "power" : 35, "accuracy" : 95, "type" : "Normal" },
            { "name" : "Tail Whip", "effect" : { "attribute" : "defense", "targetOpponent" : true, "effectInt" : 10 }, "type" : "Effect" }
        ],
        "images" : { 
            "sprite" : "./images/squirtle.gif", 
            "sprite_shiny" : "./images/squirtle-shiny.gif" 
        },

    },
    { 
        
        "id" : 151,
        "name" : "Mew",
        "type" : "Psychic",
        "stats" : {
            "hp" : 100,
            "attack" : 100,
            "defense" : 100,
            "secial" : 100,
            "speed" : 100
        },
        "moveSet" : [
            { "name" : "Pound", "power" : 40, "accuracy" : 100, "type" : "Normal" },
            { "name" : "Psychic", "power" : 90, "accuracy" : 100, "type" : "Psychic" }
        ],
        "images" : { 
            "sprite_shiny" : "./images/mew-shiny.gif" 
        },
        
    }

]