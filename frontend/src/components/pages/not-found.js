import React from 'react'
import Header from "../elements/header";
import Footer from "../elements/footer";

export default function NotFound() {
  return (
    <div>
        <div className='min-h-screen'>
            <Header/>
            <div className='flex items-center justify-center w-full min-h-screen'>
                    <div className='my-auto flex flex-col items-center justify-center'>
                        <h1 className=' text-6xl font-bold text-gray-400 my-auto'>404 Page Not Found</h1>
                        <a  href="/" className=" mt-5 w-48  text-white ml-3 bg-red-500  font-medium  hover:bg-red-600  rounded-lg px-3 py-2 text-sm flex items-start justify-center">
                            <i className="ri-arrow-left-line"></i> &nbsp; Back to Home
                        </a>
                    </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
