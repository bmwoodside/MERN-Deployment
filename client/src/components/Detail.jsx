import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Detail = (props) => {
    const { id } = useParams();
    const [pet, setPet] = useState({});
    const [disable, setDisable] = useState(false);
    const tempLikes = pet.petLikes += 1/2;

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
    }, []);

    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pets/' + petId)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.error(err));
    }

    const likesHandler = () => {
        setDisable(true)
        axios.put('http://localhost:8000/api/pet/' + id, {
            ...pet,
            [pet.petLikes]: tempLikes
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div className='header-banner'>
                <h1>Pet Shelter</h1>
                <Link to="/">back to home</Link>
            </div>

            <div className='header-banner'>
                <h2>Details about: {pet.petName}</h2>
                <Link to="/"><button onClick={(e) => { deletePet(pet._id) }} className="btn btn-danger">Adopt {pet.petName}</button></Link>
            </div>
            <h3>Pet Type: {pet.petType}</h3>
            <h3>Description: {pet.petDescription}</h3>

            <h3>Skills:</h3>
            <p>{pet.petSkill1}</p>
            <p>{pet.petSkill2}</p>
            <p>{pet.petSkill3}</p>

            <div className="likes">
                <button className="btn btn-success" onClick={likesHandler} disabled={disable}>Like {pet.petName}</button>
                <span id="numLikes">{pet.petLikes} like(s)</span>
            </div>

        </div>
    )
}

export default Detail;