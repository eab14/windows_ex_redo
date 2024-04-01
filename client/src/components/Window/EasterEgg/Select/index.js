import '../pokeball.css';
import './index.css';

import { useEffect, useState } from "react";
import { Pokemon, WildPokemon, Player } from "../classes/Pokemon";
import { pokedex } from "../data/pokedex";

const Select = () => {

    const [ starters, setStarters ] = useState(null);
    // const [ selected, setSelected ] = useState(null);

    const checkStarters = () => console.log(starters);

    const enterHandler = ({ currentTarget }) => {

        const pokeball = currentTarget.querySelector('.poke');
        const img = currentTarget.querySelector('.selected_pokemon_spacer img');

        pokeball.classList.remove('rock');
        pokeball.classList.add('open');

        img.style.opacity = 1;

    }

    const leaveHandler = ({ currentTarget }) => {

        const pokeball = currentTarget.querySelector('.poke');
        const img = currentTarget.querySelector('.selected_pokemon_spacer img');

        pokeball.classList.remove('open');
        pokeball.classList.add('rock');

        img.style.opacity = 0;

    }

    useEffect(() => {

        const bulbasaur = new Pokemon(pokedex[0])
        const charmander = new Pokemon(pokedex[1])
        const squirtle = new Pokemon(pokedex[2])

        setStarters([ bulbasaur, charmander, squirtle ]);

    }, [])

    return (

        <div className="flex center col easter_egg_select_spacer">

            <div className="flex center col select_message">
                <p>Pokémon Battle Simulation</p>
            </div>

            <div className="select_starter flex row">

                { 
                    starters &&
                    
                        starters.map((starter) => 
                            <div key={starter.id} className="flex center choice" onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>
                                <div className="flex center selected_pokemon_spacer">
                                    <img src={starter.sprite} alt={starter.name} />
                                </div>
                                <div className="poke ball rock"></div>
                            </div>
                        )
                }
                
            </div>

            <div className="flex center select_message">
                <p>Select your starter!</p>
            </div>

        </div>
        
    )

}

export default Select;