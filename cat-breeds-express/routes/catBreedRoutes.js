const express = require('express');
const catBreedController = require('../controllers/catBreedController');

const router = express.Router();

router.route('/').get(catBreedController.getAllCatBreeds);
// .post(catBreedController.createCatBreed);

router.route('/:id').get(catBreedController.getCatBreed);

module.exports = router;
