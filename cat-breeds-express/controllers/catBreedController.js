const CatBreed = require('../models/catBreedModel');

exports.getAllCatBreeds = async (req, res) => {
  try {
    const catBreeds = await CatBreed.find();
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: catBreeds.length,
      data: {
        catBreeds
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getCatBreed = async (req, res) => {
  try {
    const catBreed = await CatBreed.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        catBreed
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getCatBreedBySlug = async (req, res) => {
  try {
    const catBreed = await CatBreed.findOne({ slug: req.params.slug });

    res.status(200).json({
      status: 'success',
      data: {
        catBreed
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// exports.createCatBreed = async (req, res) => {
//   try {
//     const newCatBreed = await CatBreed.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         project: newCatBreed
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
