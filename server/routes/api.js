const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiPath = 'https://swapi.dev/api/';
const cache = {};
const propsPerson = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'gender', 'birth_year'];
const propsPlanet = ['name', 'terrain', 'population'];
const propsSpecies = ['name', 'average_lifespan', 'classification', 'language'];
const propsFilm = ['title', 'director', 'producer', 'release_date'];

const getProps = (props, from) => props.reduce((obj, key) => {
    obj[key] = from.data[key];
    return obj;
}, {});

router.get('/:id', async (req, res, next) => {
    let personData;
    const id = req.params.id;

    if (cache[id]) {
        res.json(cache[id]);
    } else {
        try {
            const person = await axios.get(`${apiPath}people/${id}`);
            personData = getProps(propsPerson, person);

            const planet = await axios.get(person.data.homeworld);
            personData.home_planet = getProps(propsPlanet, planet);

            if (person.data.species?.length) {
                const species = await axios.all(person.data.species.map(species => axios.get(species)));
                personData.species = species.map(species => getProps(propsSpecies, species));
            }

            if (person.data.films?.length) {
                const films = await axios.all(person.data.films.map(film => axios.get(film)));
                personData.films = films.map(film => getProps(propsFilm, film));
            }

            cache[id] = personData;
            res.json(personData);
        } catch (error) {
            next(error);
        }
    }
});

module.exports = router;
