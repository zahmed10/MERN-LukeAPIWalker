import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router";

const Planets = (props) => {
    const [planet, setPlanet] = useState({});
    const {id} = useParams();
    const obiWan = require("./Kenobi-1392x884.jpg")


    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
            .then(response=>{setPlanet(response.data)}, console.log(planet) )
            .catch(error => {
                console.error(error);
                setPlanet({error: "These are not the droids you are looking for"})
            });
    }, [id]); 


    return (
        planet.error ? <div> <p>{planet.error}</p><img src={obiWan.default} width="60%" alt="obi wan " /></div>  :
        <div>
            <h1>{planet.name}</h1> 
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            {/* {planet.surface_water ? <p>Surface water: true</p>: <p>Surface water: false</p>} */}
            <p>Surface water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
    );
}

export default Planets
