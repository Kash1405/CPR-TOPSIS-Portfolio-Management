import React from 'react'


function Topbar
    () {
    return (
        <div className="h-20 border-yellow-600 border-b-2 px-8 py-6 flex w-screen justify-between left-80 fixed z-10 bg-black" >
            
            <div className="w-2/3 ml-64">
                <input className="w-1/2 mr-4 rounded-lg h-8" type="text" />
                <button className="border-2 text-white h-8 px-2 rounded-lg border-white hover:text-black hover:bg-yellow-600 hover:border-black ">Search</button>
            </div>
            <img src="https://picsum.photos/200" className="mr-80 rounded-3xl" />
        </div>
    )
}

export default Topbar
