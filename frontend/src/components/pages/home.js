import React, { useState, useEffect } from 'react';
import Header from "../elements/header";
import RecipeCard from "../elements/recipe-card";
import Footer from "../elements/footer";

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
      <div className='min-h-screen'>
          <Header/>
          <div className='py-18 px-20'>
              <div className='m-8 flex justify-end'>
                <a  href="/create" className="py-2 px-4 shadow-md px-8 no-underline rounded-md bg-blue-500 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-600 flex items-start justify-center">
                  <i className="ri-add-fill"></i> &nbsp; Create Recipe
                </a>
              </div>
              <div  className='grid gap-10 grid-cols-4  '>
                {
                  recipe.length > 0 ?
                    recipe.map( data => (
                      <RecipeCard recipe={data} reload={()=>retrieveRecipe(recipe._id)}/>
                    ))
                  :
                  <p className=' w-full text-gray-400 font-semibold flex items-start justify-center col-span-4	'>No Recipes Available</p>
                }
              </div>
          </div>
      </div>
        <Footer/>
    </div>
  )
}
