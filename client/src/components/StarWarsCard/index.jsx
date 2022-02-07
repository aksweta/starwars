import React from "react";
import Button from "../Button";
import characters from "../../data/characters.json";
import "./StarWarsCard.css";

const StarWarsCard = ({ handleCharacterView }) => {
  return characters.map((character) => (
    <div className="starwars-card" key={character.id}>
      <h3 className="character-name">{character.name}</h3>
      <Button handleClick={() => handleCharacterView(character.id)}>
        View
      </Button>
    </div>
  ));
};

export default StarWarsCard;
