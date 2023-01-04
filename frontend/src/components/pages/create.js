
import React, {useState} from 'react'
import Header from "../elements/header";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' //quill's css import
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Create() {
    
    const [recipeName , setRecipeName] = useState("");
    const [ingredientName , setIngredientName] = useState("");
    const [ingredientQuantity , setIngredientQuantity] = useState("");
    const [ingredientMeasurement , setIngredientMeasurement] = useState("");
    const [Ingredients , setIngredients] = useState([]);
    const [descriptionInfo, setDescriptionInfo] = useState({description:''});
    const [Error , setError] = useState([]);


    // this function help to create and push Ingredients object and it's array
    const CreateIngredient = () =>{

        if( ingredientName.length === 0 || ingredientQuantity.length === 0 || ingredientMeasurement){
            document.getElementById("validation-message").innerHTML = "All ingredient details must be filled";
        }
        else{
            document.getElementById("validation-message").innerHTML = "";

            const Ingredient = {
                name : ingredientName,
                quantity : ingredientQuantity,
                measurement : ingredientMeasurement
            }

            
            setIngredients(Ingredients => [...Ingredients, Ingredient]);

            setIngredientName("");
            setIngredientQuantity("");
            setIngredientMeasurement("");
        }
    }

    // this function help to remove item in  Ingredients array using item name
    const HandleRemoveItem =(name) => {
        setIngredients(Ingredients.filter(item => item.name !== name))
    }

    // this function help to track the ReactQuill component
    const onDescription = (value) => {
        setDescriptionInfo({ ...descriptionInfo,
          description:value
        });
    } 

    // this function using we can create the recipe
    const RecipeCreate = () =>{

        setError([]); //set Error array empty

        //Validations
        if( recipeName.length === 0 || descriptionInfo.description.length === 0 ){
            const message = {error:"Fill All Details"};
            setError(Error => [...Error, message]);            
          }
        if(descriptionInfo.description.length <= 50){
            const message = {error:"Description should have minimum of 50 characters"};
            setError(Error => [...Error, message]); 
        }
        if(Ingredients.length == 0){
            const message = {error:"A recipe must have at least one ingredient"};
            setError(Error => [...Error, message]);  
        }
    

        if(Error.length === 0){

                //Api Call
                fetch("/recipe/add",{
                    method:"post",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({
            
                    name:recipeName, 
                    description: descriptionInfo.description, 
                    ingredients:Ingredients,
            
                    })
                }).then(res=>res.json())
                .then(data => {
            
                    if(data.error){ 
                    
                    //Tost message
                        toast.error(data.error,{
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    }
                    else{
                        //Tost message
                        toast.success(data.message,{
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });

                        //Page redirection after 1000 seconds
                        setTimeout(function(){
                            window.location.replace('/');
                        },1000);
                    }
                    
            
                console.log("data create -", data)
                }).catch((err)=>{
                console.log("Error - ", err)
                })
            }
    }

  return (
    <div>
        <ToastContainer/> {/* use tost  */}

         <Header/>
        <div className='my-5 px-24 mb-15'>
                <div div class="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Recipe Name</label>
                    <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" 
                            type="text" 
                            onChange={(e) => setRecipeName(e.target.value)} 
                    />
                </div>
                
                <div className='border border-gray-400  m-3 p-5 rounded-lg'>
                        <h1 className='text-xl font-bold'>Ingredient Section</h1>
                        <br/>
                            <p id="validation-message" className=' text-red-600'></p>
                        <br/>
                        <div className=' flex '>
                                <div div class="w-full md:w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Ingredient Name</label>
                                    <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" 
                                        type="text" 
                                        value={ingredientName}
                                        onChange={(e) => setIngredientName(e.target.value)}
                                    />
                                </div>
                                <div div class="w-full md:w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">quantity</label>
                                    <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" 
                                        type="number" 
                                        value={ingredientQuantity}
                                        onChange={(e) => setIngredientQuantity(e.target.value)} 
                                    />
                                </div>
                                <div div class="w-full md:w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Measurement</label>
                                    <select className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                            onChange={(e) => setIngredientMeasurement(e.target.value)}
                                    >
                                        <option value=""  selected  hidden>Select Measurement</option>
                                        <option value="Teaspoon">Teaspoon</option>
                                        <option value="Tablespoon">Tablespoon</option>
                                        <option value="Cup">Cup</option>
                                        <option value="Fruit">Fruit</option>
                                        <option value="Kg">kg</option>
                                        <option value="g">g</option>
                                        <option value="g">mg</option>
                                        <option value="L">liter</option>
                                        <option value="l">ml</option>
                                        <option value="As you want">As you want</option>
                                        <option value="">No Measurement</option>
                                    </select>
                                </div>
                        </div>
                        <div div class=" px-3 mb-6 flex  justify-end">
                            <button onClick={(e) => CreateIngredient()}  className="py-3 px-3  no-underline rounded-md bg-blue-500 text-white font-sans font-semibold text-sm border-blue  hover:text-white hover:bg-blue-600">
                                Add Ingredient
                            </button>
                        </div>
                        <div>
                            <div>
                            {/* check Ingredients length and its more than 0 we show the table  */}
                            { Ingredients.length > 0 && 
                                <table className="border-collapse w-full">
                                    <thead>
                                    <tr>
                                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Ingredient</th>
                                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">quantity & Measurement</th>
                                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {/* //Ingredients map the table */}
                                        {
                                            Ingredients.map(data =>(


                                            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                                    {data.name}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                                    {data.quantity +" "+ data.measurement}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                                    <button onClick={() =>HandleRemoveItem(data.name)} className="text-red-400 hover:text-red-600 no-underline pl-6">Remove</button>
                                                </td>
                                            </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            }
                        </div>
                        </div>


                       
                </div>

                <div div class="w-full md:w-full px-3  h-auto mb-6 relative">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Description</label>
                        {/* in here we use to ReactQuill component */}
                        <ReactQuill style={{height:"240px"}}
                            className="  appearance-none block w-full bg-white text-gray-900 font-medium  rounded-lg py-3 px-3 leading-tight focus:outline-none"
                            theme="snow"
                            value={descriptionInfo.description}
                            onChange={onDescription}
                            placeholder={"Include all information about your Recipe"}
                        />
                </div>
                <div div class="mt-20 relative px-3 mb-6 flex flex-col justify-end">
                    { Error.length > 0 &&
                        <div className='m-5'>
                             {/* errors map */}
                            {
                                Error.map( item => (
                                    <p className='text-red-600'>- {item.error}</p>
                                ))
                            }
                        </div>
                    }

                    <button onClick={(e) => RecipeCreate()}  className="py-3 px-3 w-full  no-underline rounded-md bg-green-600 text-white font-sans font-bold text-sm border-blue  hover:text-white hover:bg-green-700">
                        Create Recipe
                    </button>
                </div>
        </div>
    </div>
  )
}
