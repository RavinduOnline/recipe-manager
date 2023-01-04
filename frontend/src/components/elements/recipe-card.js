import React, {useState} from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MessageModel from "./message-model"


export default function RecipeCard({recipe , reload}) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const description = `${recipe.description.substr(0, 200)}${ recipe.description.length > 200  && "...."}`;

    const onDelete = (id) =>{
        fetch('/recipe/delete/' + id, {
          method: 'DELETE',
        }).then(res=>res.json())
        .then((data) =>{
  
          if(data.error){ 
            toast.error(data.error,{
              theme: "colored",
            });
          }
          else{
            toast.error(data.message,{
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              icon: false,
            });

            reload(true);
            
          }
  
  
        })
        .catch((err)=>{
          console.log(err)
         })
      }

    

  return (
    <div>
        <ToastContainer/>
        <MessageModel modelOpen={open} isConfirm={() =>onDelete(recipe._id)} data={{ title:"Are you sure you want to delete this Recipe?", message:recipe.name }}/>

        <div className="max-w-lg mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <div className="p-5">
                <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight">{recipe.name}</h5>
                </a>

                <p className="font-normal text-gray-500 text-justify text-gray-700 mb-3">You need only {recipe.ingredients.length} ingredients</p>

                <p className="font-normal text-justify text-gray-700 mb-3 " dangerouslySetInnerHTML={{__html:description}}/>   
                
                <div className='flex flex-col'>
                    <a className=" min-w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 flex items-start justify-center" href="#3">
                        <i className="ri-fire-fill"></i> &nbsp; Let's Cook
                    </a>
                    <div className=' flex flex-row justify-centre item-centre mt-5'>
                        <a href={`/recipe/edit/${recipe._id}`} className="w-1/2  text-white text-centre bg-yellow-500 font-medium  hover:bg-yellow-600  rounded-lg px-3 py-2 text-sm flex items-start justify-center ">
                            <i className="ri-edit-2-fill"></i>  &nbsp; Edit
                        </a>
                        <a  onClick={() =>handleOpen()} className="w-1/2  text-white ml-3 bg-red-500  font-medium  hover:bg-red-600  rounded-lg px-3 py-2 text-sm flex items-start justify-center" href="#3">
                            <i className="ri-delete-bin-4-fill"></i> &nbsp; Delete
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
