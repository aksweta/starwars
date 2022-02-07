import React from "react";
import "./modal.css";

const Modal = ({ handleCloseClick, person }) => {
  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={handleCloseClick}>
          &times;
        </span>
        <h2>{person.name}</h2>
        <table>
          <tr>
            <td>Height:</td>
            <td>{person.height}</td>
          </tr>
          <tr>
            <td>Mass:</td>
            <td>{person.mass}</td>
          </tr>
          <tr>
            <td>Hair Color:</td>
            <td>{person.hair_color}</td>
          </tr>
          <tr>
            <td>Skin Color:</td>
            <td>{person.skin_color}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{person.gender}</td>
          </tr>
          <tr>
            <td>Birth Year:</td>
            <td>{person.birth_year}</td>
          </tr>
          <tr>
            <td>Home Planet:</td>
            <td>
              Title: {person.home_planet.title}, Terrain:{" "}
              {person.home_planet.terrain}, Population:{" "}
              {person.home_planet.population}
            </td>
          </tr>
          <tr>
            <td>Speices:</td>
            <td>
              {person.species.length > 0 ? (
                <table>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Average Lifespan</th>
                    <th>Classification</th>
                    <th>Language</th>
                  </tr>
                  {person.species.map((specie, i) => {
                    return (
                      <tr>
                        <td>{i + 1}.</td>
                        <td>{specie.name}</td>
                        <td>{specie.average_lifespan}</td>
                        <td>{specie.classification}</td>
                        <td>{specie.language}</td>
                      </tr>
                    );
                  })}
                </table>
              ) : (
                "There is no record found!"
              )}
            </td>
          </tr>
          <tr>
            <td>Films:</td>
            <td>
              <table>
                <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th>Director</th>
                  <th>Producer</th>
                  <th>Relase Date</th>
                </tr>
                {person.films.map((film, i) => {
                  return (
                    <tr>
                      <td>{i + 1}.</td>
                      <td>{film.title}</td>
                      <td>{film.director}</td>
                      <td>{film.producer}</td>
                      <td>{film.release_date}</td>
                    </tr>
                  );
                })}
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Modal;
