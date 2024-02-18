import React from 'react'
import Demo from '../../images/demo.jpg'


const AllProducts = () => {
  return (
    <>
      <div class="text-center text-decoration-underline p-10">
        <h1 class="font-bold text-4xl mb-4">All Products</h1>
        {/* <h1 class="text-3xl">Tailwind CSS</h1> */}
      </div>

      <section id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img src={Demo}
              alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-600 mr-3 uppercase text-xs">Maybelline</span>
              <p class="text-lg font-bold text-black truncate block capitalize">Eyeliner</p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">Rs. 2000</p>
                
                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg></div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img src={Demo}
              alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-600 mr-3 uppercase text-xs">Fenty Beauty</span>
              <p class="text-lg font-bold text-black truncate block capitalize">Lipstick</p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">Rs 2000</p>
                
                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg></div>
              </div>
            </div>
          </a>
        </div>
        
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img src={Demo}
              alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-600 mr-3 uppercase text-xs">L.A. Girl</span>
              <p class="text-lg font-bold text-black truncate block capitalize">Blush</p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">Rs 2000</p>
                
                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg></div>
              </div>
            </div>
          </a>
        </div>
    
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img src={Demo}
              alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-600 mr-3 uppercase text-xs">M.A.C</span>
              <p class="text-lg font-bold text-black truncate block capitalize">Eyeshadow pallette</p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">Rs 23000</p>
                
                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg></div>
              </div>
            </div>
          </a>
        </div>
        
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img src={Demo}
              alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-600 mr-3 uppercase text-xs">Lakme</span>
              <p class="text-lg font-bold text-black truncate block capitalize">Loose Powder</p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">Rs 200</p>
                
                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg></div>
              </div>
            </div>
          </a>
        </div>
        
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img src={Demo}
              alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-600 mr-3 uppercase text-xs">NYX</span>
              <p class="text-lg font-bold text-black truncate block capitalize">Lip Gloss</p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">Rs 600</p>
                
                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg></div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>

  )
}

export default AllProducts