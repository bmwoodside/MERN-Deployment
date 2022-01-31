import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


const PetForm = () => {

    const history = useHistory();

    const [form, setForm] = useState({
        petName: "",
        petType: "",
        petDescription: "",
        petSkill1: "",
        petSkill2: "",
        petSkill3: "",
        petLikes: 0,
    })
    const [nameError, setNameError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [formError, setFormError] = useState("");

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        //if validations, make axios post request for new pet
        form.petName.length >= 3 && form.petType.length >= 3 && form.petDescription.length >= 3
            ? axios.post('http://localhost:8000/api/pet', form)
                .then(res => {
                    console.log(res)
                    history.push("/")
                })
                .catch(err => console.log(err))
            : setFormError("Fix the errors before submitting.")
        
        
        
        // todo: add stuff to clear the fields...
    }

    return (
        <div>
            <div className='header-banner'>
                <h1>Pet Shelter</h1>
                <Link to="/">back to home</Link>
            </div>

            {
                formError
                    ? <p style={{ color: "red" }}>{formError}</p>
                    : null
            }

            <h3>Know a pet needing a home?</h3>

            <form onSubmit={onSubmitHandler} className="petForm">
                <div className="required">
                    <label htmlFor="petName">
                    <p>Pet Name: <span>
                        <input type="text" name="petName" onChange={(e) => {onChangeHandler(e); e.target.value.length < 3 ? setNameError("Pet Name must have at least 3 characters."):setNameError("")}} />
                        </span></p>
                        {
                            nameError
                            ? <p style={{color: "red"}}>{ nameError }</p>
                            : null
                        }
                    </label>
                    
                    <label htmlFor="petType">
                    <p>Pet Type: <span>
                        <input type="text" name="petType" onChange={(e) => {onChangeHandler(e); e.target.value.length < 3 ? setTypeError("Pet Type must have at least 3 characters."):setTypeError("")}} />
                        </span></p>
                        {
                            typeError
                            ? <p style={{color: "red"}}>{ typeError }</p>
                            : null
                        }
                    </label>
                    
                    <label htmlFor="petDescription">
                    <p>Pet Description: <span>
                        <input type="text" name="petDescription" onChange={(e) => {onChangeHandler(e); e.target.value.length < 3 ? setDescriptionError("Pet Description must have at least 3 characters."):setDescriptionError("")}} />
                        </span></p>
                        {
                            descriptionError
                            ? <p style={{color: "red"}}>{ descriptionError }</p>
                            : null
                        }
                    </label>

                    <button type="submit" className="btn btn-primary">Add Pet</button>
                </div>

                <div className="optional">
                    <p>Skills (optional):</p>

                    <label htmlFor="petSkill1">
                    <p>Skill 1: <span>
                        <input type="text" name="petSkill1" onChange={onChangeHandler} />
                        </span></p>
                    </label>

                    <label htmlFor="petSkill2">
                    <p>Skill 2: <span>
                        <input type="text" name="petSkill2" onChange={onChangeHandler} />
                        </span></p>
                    </label>

                    <label htmlFor="petSkill3">
                    <p>Skill 3: <span>
                        <input type="text" name="petSkill3" onChange={onChangeHandler} />
                        </span></p>
                    </label>
                </div>

                
            </form>
        </div>
    )
}

export default PetForm;