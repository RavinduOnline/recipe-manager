import React from 'react'



export default function Header() {
  return (
    <header>
        <nav className="bg-white px-6 py-2.5 bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl my-5">
            <div className=' flex flex-row justify-between items-center w-full '>
              <a href="/" className="flex items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/4986/4986622.png" className="mr-3 h-6" alt="Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Recipe Hub</span>
              </a>

              <div className="w-auto justify-between items-center flex">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a  href="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 ">
                      Home
                    </a>
                  </li>
                </ul>
                {/* Refresh using current URL */}
                <a href={document.URL} className="text-white ml-5  bg-red-600 hover:bg-gray-700 font-semibold font-medium rounded-lg text-sm px-4 py-3 flex items-start justify-center ">
                  <i className="ri-refresh-line"></i> &nbsp; Refresh
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
  )
}
