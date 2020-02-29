const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const CatBreed = require('../models/catBreedModel');

dotenv.config({ path: '../config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const catBreeds = JSON.parse(
  fs.readFileSync(`${__dirname}/breeds.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await CatBreed.create(catBreeds);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

importData();
