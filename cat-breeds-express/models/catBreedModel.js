const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const catBreedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A cat breed must have a name'],
      unique: true,
      trim: true,
      maxlength: [
        40,
        'A cat breed name must have less or equal then 40 characters'
      ],
      minlength: [
        3,
        'A cat breed name must have more or equal then 10 characters'
      ]
    },
    slug: String,
    temperament: {
      type: String,
      trim: true,
      required: [true, 'A cat breed must have a temperant description']
    },
    origin: {
      type: String,
      trim: true,
      required: [true, 'A cat breed must have an origin']
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'A cat breed must have a description']
    },
    adaptability: {
      type: Number,
      required: [true, 'Value cannot be null.'],
      min: [1, 'Min value is 1'],
      max: [5, 'Max value is 5'],
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    affection_level: {
      type: Number,
      required: [true, 'Value cannot be null.'],
      min: [1, 'Min value is 1'],
      max: [5, 'Max value is 5'],
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    energy_level: {
      type: Number,
      required: [true, 'Value cannot be null.'],
      min: [1, 'Min value is 1'],
      max: [5, 'Max value is 5'],
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    grooming: {
      type: Number,
      required: [true, 'Value cannot be null.'],
      min: [1, 'Min value is 1'],
      max: [5, 'Max value is 5'],
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    intelligence: {
      type: Number,
      required: [true, 'Value cannot be null.'],
      min: [1, 'Min value is 1'],
      max: [5, 'Max value is 5'],
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    social_needs: {
      type: Number,
      required: [true, 'Value cannot be null.'],
      min: [1, 'Min value is 1'],
      max: [5, 'Max value is 5'],
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    stranger_friendly: {
      type: Number,
      required: [true, 'Value cannot be null.'],
      min: [1, 'Min value is 1'],
      max: [5, 'Max value is 5'],
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    more_info_url: {
      type: String,
      required: [true, 'A cat breed must have an URL']
    },

    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
catBreedSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

catBreedSchema.pre('save', function(next) {
  console.log('Will save document...');
  next();
});

const CatBreed = mongoose.model('CatBreed', catBreedSchema);

module.exports = CatBreed;
