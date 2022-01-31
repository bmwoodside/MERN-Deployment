import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PetForm from '../components/PetForm';
import PetsDisplay from '../components/PetsDisplay';

const Main = (props) => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                setPets(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [pets]);

    const removeFromDom = petId => {
        setPets(pets.filter(pet => pet._id !== petId));
    }
    
    return (
        <div>
            <div className='header-banner'>
                <h1>Pet Shelter</h1>
                <Link to="/api/pet/new">add a pet to the shelter</Link>
            </div>
            <h3>These pets are looking for a good home</h3>
            {loaded && <PetsDisplay pets={pets} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;