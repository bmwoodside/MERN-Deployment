const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: { type: String },
    petType: { type: String },
    petDescription: { type: String },
    petSkill1: { type: String },
    petSkill2: { type: String },
    petSkill3: { type: String },
    petLikes: { type: Number },
}, { timestamps: true });

module.exports.Pet = mongoose.model('Pet', PetSchema);