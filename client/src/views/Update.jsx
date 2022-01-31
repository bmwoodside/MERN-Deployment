import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from 'react-router-dom';
import axios from "axios";


const Update = (props) => {
    const { id } = useParams();
    const [form, setForm] = useState({});
    const [nameError, setNameError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [formError, setFormError] = useState("");

    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                setForm(res.data)
            })
    }, []);

    const updatePet = e => {
        e.preventDefault();

        form.petName.length >= 3 && form.petType.length >= 3 && form.petDescription.length >= 3
            ? axios.put('http://localhost:8000/api/pet/' + id, {
                petName: form.petName,
                petType: form.petType,
                petDescription: form.petDescription,
                petSkill1: form.petSkill1,
                petSkill2: form.petSkill2,
                petSkill3: form.petSkill3,
                petLikes: form.petLikes,
            })
                .then(res => {
                    console.log(res)
                    history.push("/");
                })
                .catch(err => console.log(err))
            : setFormError("Fix the errors before submitting.")

    }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <div className='header-banner'>
                <h1>Pet Shelter</h1>
                <Link to="/">back to home</Link>
            </div>
            <h2>Edit {form.petName}</h2>
            <form onSubmit={updatePet} className="petForm">
                <div className="required">
                    <label htmlFor="petName">
                    <p>Title <span>
                        <input type="text" name="petName" onChange={(e) => {onChangeHandler(e); e.target.value.length < 3 ? setNameError("Pet Name must have at least 3 characters."):setNameError("")}} value={form.petName}/>
                        </span></p>
                        {
                            nameError
                            ? <p style={{color: "red"}}>{ nameError }</p>
                            : null
                        }
                    </label>
                    
                    <label htmlFor="petType">
                    <p>Type <span>
                        <input type="text" name="petType" onChange={(e) => {onChangeHandler(e); e.target.value.length < 3 ? setTypeError("Pet Type must have at least 3 characters."):setTypeError("")}} value={form.petType} />
                        </span></p>
                        {
                            typeError
                            ? <p style={{color: "red"}}>{ typeError }</p>
                            : null
                        }
                    </label>
                    
                    <label htmlFor="petDescription">
                    <p>Description <span>
                        <input type="text" name="petDescription" onChange={(e) => {onChangeHandler(e); e.target.value.length < 3 ? setDescriptionError("Pet Description must have at least 3 characters."):setDescriptionError("")}} value={form.petDescription} />
                        </span></p>
                        {
                            descriptionError
                            ? <p style={{color: "red"}}>{ descriptionError }</p>
                            : null
                        }
                    </label>
                    
                    <button type="submit" className="btn btn-primary">Edit Pet</button>
                    {
                        formError
                            ? <p style={{ color: "red" }}>{formError}</p>
                            : null
                    }
                </div>

                <div className="optional">
                    <p>Skills (optional):</p>

                    <label htmlFor="petSkill1">
                    <p>Skill 1: <span>
                        <input type="text" name="petSkill1" onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} value={form.petSkill1} />
                        </span></p>
                    </label>

                    <label htmlFor="petSkill2">
                    <p>Skill 2: <span>
                        <input type="text" name="petSkill2" onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} value={form.petSkill2} />
                        </span></p>
                    </label>

                    <label htmlFor="petSkill3">
                    <p>Skill 3: <span>
                        <input type="text" name="petSkill3" onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} value={form.petSkill3} />
                        </span></p>
                    </label>
                </div>

            </form>
        </div>
    )
}

export default Update;