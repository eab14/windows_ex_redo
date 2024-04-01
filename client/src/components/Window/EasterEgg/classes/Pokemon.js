export class Pokemon {

    id;
    name;
    type;
    moveSet;
    shiny;
    critChance;
    dodgeChance;
    sprite;
    level;

    constructor(pokemon) {
        this.id = pokemon.id;
        this.name = pokemon.name;
        this.moveSet = pokemon.moveSet;
        this.shiny = (pokemon.shiny) ? pokemon.shiny : Math.random() < 1 / 4096 ? true : false;
        this.stats = pokemon.stats;
        this.type = pokemon.type;
        this.level = (pokemon.level) ? pokemon.level : 5;
        this.critChance = Math.ceil(this.stats.speed / 10);
        this.dodgeChance = Math.ceil(this.stats.speed / 10); 
        this.sprite = (this.shiny) ? pokemon.images.sprite_shiny : pokemon.images.sprite;
    }

}

export class Player extends Pokemon {

    battle_sprite;

    constructor(pokemon) {
        super(pokemon);
    }

}

export class WildPokemon extends Pokemon {

    battle_sprite;
    level = 5;
    catchRate = 1;

    constructor(pokemon) {
        super(pokemon);
    }

}