import React, { useState } from "react";
import Modal from "./Modal";
import StarWarsCard from "./StarWarsCard";
import Loading from "./Loading";

const StarWarsCharacters = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(false);

  const handleCharacterView = async (id) => {
    setLoading(true);
    const data = { id };
    await fetch("http://localhost:8080", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setPerson(data))
      .catch((error) => console.log(error));
    setIsModalShow(true);
    setLoading(false);
  };

  const handleCloseClick = () => {
    setIsModalShow(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        isModalShow && (
          <Modal handleCloseClick={handleCloseClick} person={person} />
        )
      )}
      <StarWarsCard handleCharacterView={handleCharacterView} />
    </>
  );
};

export default StarWarsCharacters;
