const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const app = express()
const port = 8080

app.use(cors());
app.use(bodyParser.json());


const getPeople = async (id) => 
    await axios.get(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.data)
    

const getFilmsOrSpeciesOrHomeWorld = async (urls) =>
    axios.all(urls.map((url) => axios.get(url)))
   .then((data) =>  data.map(res => res.data))


app.post("/", async (req, res) => {
    try {
      console.log("id",(req.body.id))  
      console.log("reuqest...",req.body);

      const people = await getPeople(req.body.id);
      const homeWorld = await getFilmsOrSpeciesOrHomeWorld([people.homeworld]);

      const films = await getFilmsOrSpeciesOrHomeWorld(people.films);
      const species = await getFilmsOrSpeciesOrHomeWorld(people.species);

      const { name, height, mass, hair_color, skin_color, gender, birth_year } = people

      const starWarsData = {
          name,
          height,
          mass,
          hair_color,
          skin_color,
          gender,
          birth_year,
          home_planet: homeWorld,
          species,
          films
      }
      res.send(JSON.stringify(starWarsData));
    } catch (ex) {
 
    }
  });



app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`)
 })