import React, { useState } from "react";
import Modal from "./Modal";
import StarWarsCard from "./StarWarsCard";

const StarWarsCharacters = () => {

    const [isModalShow, setIsModalShow] = useState(false)

    const handleCharacterView = async (id) => {
        setIsModalShow(true);
        console.log(id);
        const data= {id};
        await fetch('http://localhost:8080', {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
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