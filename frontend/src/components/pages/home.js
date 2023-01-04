import React, { useState, useEffect } from 'react'
import Header from "../elements/header"
import RecipeCard from "../elements/recipe-card"

export default function Home() {
  const [recipe , setRecipe] = useState([]);

  useEffect(() => {
    retrieveRecipe();
  }, []);


  const retrieveRecipe = () =>{
    fetch("/recipe").then(res=>res.json())
        .then(response=>{
          console.log(response);
          setRecipe(response);
      })
      .catch((err)=>{
          console.log("Err - ",err)
      })
  }

  return (
    <div>
        <Header/>
        <div className='py-16 px-20'>

            <div  className='grid gap-10 grid-cols-4  '>
              {recipe.map( data => (
                <RecipeCard recipe={data} reload={()=>retrieveRecipe(recipe._id)}/>
              ))}
            </div>
        </div>
    </div>
  )
}
