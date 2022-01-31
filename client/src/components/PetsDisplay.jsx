import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PetsDisplay = (props) => {

    // just returning the map: "Main" view is making the axios call...
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {props.pets.map((pet, i) =>
                        <tr key={i}>
                            <td>{pet.petName}</td>
                            <td>{pet.petType}</td>
                            <td><Link to={`/api/pets/` + pet._id}>Details</Link> | <Link to={"/api/pets/" + pet._id + "/edit"}>Edit</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
            
        </div>
    )
}

export default PetsDisplay;