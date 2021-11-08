import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router";

const People = (props) => {
    const [person, setPerson] = useState({});
    const {id} = useParams();


    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
            .then(response=>{setPerson(response.data)})
            .catch(error => {
                console.error(error);
                setPerson({error: "These are not the droids you are looking for"})
            });
    }, [id]); 


    return (
        person.error ? <p>{person.error}</p> :
        <div>
            <p>{person.name}</p> 
            <p>Height: {person.height} cm</p>
            <p>Mass: {person.mass} kg</p>
            <p>Hair color: {person.hair_color}</p>
            <p>Skin color: {person.skin_color}</p>
        </div>
    );
}

export default People;
