const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

const getPerson = async (id) =>
  await axios.get(`https://swapi.dev/api/people/${id}`).then((res) => res.data);

// const getFilmsOrSpeciesOrHomeWorld = async (urls) =>
//     axios.all(urls.map((url) => axios.get(url)))
//    .then((data) =>  data.map(res => res.data))

const getFilms = async (urls) =>
  axios
    .all(urls.map((url) => axios.get(url)))
    .then((data) =>
      data.map((res) => {
        return {
          title: res.data.title,
          director: res.data.director,
          producer: res.data.producer,
          release_date: res.data.release_date,
        };
      })
    )
    .catch((error) => error);

const getSpecies = async (urls) =>
  axios
    .all(urls.map((url) => axios.get(url)))
    .then((data) =>
      data.map((res) => {
        return {
          name: res.data.name,
          average_lifespan: res.data.average_lifespan,
          classification: res.data.classification,
          language: res.data.language,
        };
      })
    )
    .catch((error) => error);

const getHomeWorld = async (url) =>
  await axios
    .get(url)
    .then((res) => {
      return {
        title: res.data.name,
        terrain: res.data.terrain,
        population: res.data.population,
      };
    })
    .catch((error) => error);

app.post("/", async (req, res) => {
  try {
    const starWarsCharacter = await getPerson(req.body.id);
    const homeWorld = await getHomeWorld(starWarsCharacter.homeworld);
    const films = await getFilms(starWarsCharacter.films);
    const species = await getSpecies(starWarsCharacter.species);
    const { name, height, mass, hair_color, skin_color, gender, birth_year } =
      starWarsCharacter;
    const person = {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      gender,
      birth_year,
      home_planet: homeWorld,
      species,
      films,
    };
    res.send(JSON.stringify(person));
  } catch (error) {
    res.send(JSON.stringify(error));
  }
});

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`);
});
