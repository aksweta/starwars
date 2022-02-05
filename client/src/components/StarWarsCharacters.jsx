import React from "react";
import Button from "./Button";
import characters from '../data/characters.json';

const StarWarsCharacters = () => {

    const handleCharacterView = (id) => {
        console.log(id);
    }

    return characters.map((character) => {
        return(
            <div className="starwars-card" key={character.id}>
                <h3 className="character-name">{character.name}</h3>
                <Button handleClick={() => handleCharacterView(character.id)}>View</Button>
            </div>
        )
    })
}

export default StarWarsCharacters;