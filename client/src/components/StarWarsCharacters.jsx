import React from "react";
import characters from '../data/characters.json';

const StarWarsCharacters = () => {
    return characters.map((character) => {
        return(
            <div className="starwars-card" key={character.id}>
                <h3 className="character-name">{character.name}</h3>
                <a href="">View</a>
            </div>
        )
    })
}

export default StarWarsCharacters;