import React from 'react'

function Searchbar() {
  return (
    <>
      {/* Search input on desktop screen */}
      <form action=""  className={`lg:mx-2 lg:py-2 p-2 w-full h-full lg:mr-6`} >
          <div className="relative h-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="text-gray-500" height={"24px"} width={"24px"} viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <input type="text" className="placeholder:text-gray-500 w-full h-full pl-10 pr-4 text-gray-700 bg-blue-50 border lg:rounded-md outline-none" placeholder="Search for Products, Brands and More" />
          </div>
      </form>
    </>
  )
}

export default Searchbar