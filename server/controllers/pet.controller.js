
const { response, request } = require('express');
const { Pet } = require('../models/pet.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World!"
    });
}

// create new pet
module.exports.createPet = (req, res) => {
    const { petName, petType, petDescription, petSkill1, petSkill2, petSkill3, petLikes } = req.body;
    Pet.create({
        petName,
        petType,
        petDescription,
        petSkill1,
        petSkill2,
        petSkill3,
        petLikes,
    })
        .then(pet => res.json(pet))
        .catch(err => res.json(err));
}

// get all pets
module.exports.getAllPets = (req, res) => {
    Pet.find({})
        .then(pets => res.json(pets))
        .catch(err => res.json(err));
}

// get One pet
module.exports.getPet = (req, res) => {
    Pet.findOne({_id:req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

// update one pet
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch (err => res.json(err));
}