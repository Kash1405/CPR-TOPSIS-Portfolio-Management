import React from 'react'

function Topbar
    () {
    return (
        <div className="h-20 bg-red-200 px-8 py-6 flex justify-between">
            <p className="font-bold text-3xl">ATX</p>
            <div className="w-2/3 ml-42">
                <input className="w-1/2 mr-4 rounded-lg h-8" type="text" />
                <button className="border-2 h-8 px-2 rounded-lg border-black">Search</button>
            </div>
            <img src="https://picsum.photos/200" className="rounded-3xl" />
        </div>
    )
}

export default Topbar
