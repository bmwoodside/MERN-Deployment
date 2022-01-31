
const PetController = require('../controllers/pet.controller');

module.exports = function(app) {
    // app.get('/', PetController.index);
    app.post('/api/pet', PetController.createPet);
    app.get('/api/', PetController.getAllPets);
    app.get('/api/pets', PetController.getAllPets);
    app.get('/api/pets/:id', PetController.getPet);
    app.put('/api/pet/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.deletePet);
}