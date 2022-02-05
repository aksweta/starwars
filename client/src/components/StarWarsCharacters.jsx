import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import characters from '../data/characters.json';

const StarWarsCharacters = () => {

    const [isModalShow, setIsModalShow] = useState(false)

    const handleCharacterView = (id) => {
        setIsModalShow(true);
        console.log(id);
    }

    const handleCloseClick = () => {
        setIsModalShow(false)
    }
    
    return (
        <>
            {isModalShow && <Modal handleCloseClick={handleCloseClick} />}
            {characters.map((character) => (
                <div className="starwars-card" key={character.id}>
                    <h3 className="character-name">{character.name}</h3>
                    <Button handleClick={() => handleCharacterView(character.id)}>View</Button>
                </div>
                )
            )}
        </>
    )
}

export default StarWarsCharacters;