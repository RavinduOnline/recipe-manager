const express =require('express');
const mongoose=require('mongoose');
const router = express.Router();
const recipe = require("../models/recipe");
const Recipe = mongoose.model('Recipe');



// Recipe Create
router.post("/recipe/add", async (req, res) => {
    const {name, description, ingredients} = req.body;
  try {
        if(!name || !description || !ingredients){
            return res.status(422).json({ error: "Please fill all the field" });
        }else if( ingredients.length < 1){
            return res.status(422).json({ error: "Ingredients can't be empty" });
        }

        newRecipe = new Recipe({
            name, description, ingredients
         });
        const RecipeCreated = await newRecipe.save()
        if(RecipeCreated){
            return res.status(201).json({ message: "Recipe created successfully" });
        } 

    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err.message });
  }
});


//Recipe Update 
router.put('/recipe/update/:id', async (req,res)=>{

    const {name, description, ingredients} = req.body;
  try {
    if(!name || !description || !ingredients){
        return res.status(422).json({ error: "Please fill all the field" });
    }else if( ingredients.length < 1){
        return res.status(422).json({ error: "Ingredients can't be empty" });
    }

             Recipe.findByIdAndUpdate(
                req.params.id,{
                    name, description, ingredients
                },
                (err,post)=>{
                    if(err){
                        return res.status(400).json({
                            error:err 
                        });
                    }

                    return res.status(200).json({
                        success:"Recipe Updated Successfully"
                    });
                }
            );

  }catch{
        console.log(err);
        return res.status(400).json({ error: err.message });
  }
});

//All Recipes Retrieve
router.get("/recipe", async (req, res) => {
    try{
       Recipe.find().sort('createdAt')
      .then((RecipeList)=>{
          res.status(200).json(RecipeList)
      }).catch((err)=>{
          console.log(err);
      })
  }catch{
      return res.status(400).json({ error: "Can't Find the recipes" });
  } 
  });

//Single Recipe Retrieve
router.get("/recipe/:id", async (req, res) => {
        
    try{
        Recipe.findById(req.params.id).then((RecipeData)=>{
            res.status(200).json(RecipeData)
        }).catch((err)=>{
            console.log(err);
            return res.status(404).json({ error: "Recipe not found" });
        })
    }catch{
        return res.status(400).json({ error: "Something has error" });
    }


});

//Recipe Delete 
router.delete('/recipe/delete/:id', async (req,res)=>{

    try{
        Recipe.findByIdAndRemove(req.params.id).exec((err) =>{

                if(err){
                    return res.status(400).json({
                        message:"Recipe Deleting Process has Error" ,err
                    });
                }
        
                return res.status(200).json({
                    message:"Recipe Deleted Successfully"
                });
        });

    }catch{
        return res.status(400).json({ error: "Can not Delete" });
    }
});

module.exports = router;