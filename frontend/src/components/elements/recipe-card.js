import React from 'react'

export default function RecipeCard({recipe}) {
  return (
    <div>
        <div className="max-w-lg mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <div className="p-5">
                <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{recipe.name}</h5>
                </a>
                <p className="font-normal text-justify text-gray-700 mb-3">{recipe.description}</p>

                <div className='flex flex-col'>
                    <a className=" min-w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 flex items-start justify-center" href="#3">
                        <i className="ri-fire-fill"></i> &nbsp; Let's Cook
                    </a>
                    <div className=' flex flex-row justify-centre item-centre mt-5'>
                        <a className="w-1/2  text-white text-centre bg-yellow-500 font-medium  hover:text-black  rounded-lg px-3 py-2 text-sm flex items-start justify-center " href="#3">
                            <i className="ri-edit-2-fill"></i>  &nbsp; Edit
                        </a>
                        <a className="w-1/2  text-white ml-3 bg-red-500  font-medium  hover:text-black  rounded-lg px-3 py-2 text-sm flex items-start justify-center" href="#3">
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
