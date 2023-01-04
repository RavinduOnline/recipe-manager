import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from "../elements/header";
import Footer from "../elements/footer";


export default function RecipeView() {


    const [recipeName , setRecipeName] = useState("");
    const [Ingredients , setIngredients] = useState([]);
    const [descriptionInfo, setDescriptionInfo] = useState({description:''});
    const [Error , setError] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        getRecipe();
    },[]);
    
    const getRecipe = () =>{

        fetch("/recipe/"+id).then(res=>res.json())
          .then(response=>{
            setRecipeName(response.name);
            setIngredients(response.ingredients);
            setDescriptionInfo({description:response.description});
            
        })
        .catch((err)=>{
            console.log("Error - ",err)
        })
    }
  return (
    <div>

        <div className='min-h-screen'>
            <Header/>
            
            <div className='my-5 px-24 mb-15'>

                <div>
                    <div className='relative'>
                        <div className='flex items-center justify-center w-full min-h-full absolute'>
                            <div className='m-auto max-w-5xl'>
                                <p className='text-white text-xl font-bold'>We are going to Cook</p>
                                <h1 className='text-white text-7xl font-bold'>{recipeName}</h1>
                            </div>
                        </div>
                        <img className='w-full my-3 mt-12' src="/image/cook-img.jpg" alt="" />
                    </div>

                    <div className='my-12 border border-gray-400 rounded-lg py-3 px-3 leading-tight'>
                        <h2 class="mb-2 text-3xl font-semibold">Ingredients :</h2>
                            <ul class="ml-10 max-w-3xl space-y-1 text-xl text-gray-600 list-disc list-inside ">
                                { Ingredients.map(data => ( 
                                    <li>
                                        {data.name} - {data.quantity} {data.measurement} 
                                    </li>
                                    ))
                                }
                            </ul>
                    </div>

                    <p className="font-normal text-xl text-justify  my-3 " dangerouslySetInnerHTML={{__html:descriptionInfo.description}}/>   

                </div>

            </div>
        </div>
            <Footer/>
    </div>
  )
}
