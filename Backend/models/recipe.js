const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        trim: true,
        required: true,
    },
    ingredients:[
        {
         name: {
            type: String,
            trim: true,
            required: true,
        },
         quantity:{
            type: String,
        },
        measurement:{
            type: String,
        }
        }
    ],
    description: {
        type: String,
        trim: true,
        required: true,
    }
  },
  { timestamps: true }
);

mongoose.model("Recipe",recipeSchema)