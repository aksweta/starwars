import React, { useState } from "react";
import Modal from "./Modal";
import StarWarsCard from "./StarWarsCard";

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
            <StarWarsCard handleCharacterView={handleCharacterView} />
        </>
    )
}

export default StarWarsCharacters;