import React from 'react'
import Logo from "./Logo.png"
import BG from "./backdrop.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFire, faHeart, faBriefcase, faChartLine, faBook } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <div className="w-80 h-screen px-10 py-5 fixed border-yellow-600 border-r-2 bg-black " >
            <div className='flex  justify-evenly '>
                <img src={Logo} alt="CPG"  className='m-5 w-20'/>
            </div>

            {/* <div className="h-20 bg-white rounded-lg mt-10 pt-2 pb-4 px-3 bg-green-200">
                <p className="text-sm">Current Portfolio</p>
                <div className='flex '>
                    <p className="font-bold text-center my-auto text-4xl ml-5">$1200</p>
                    <p className="font-bold text-center my-auto text-sm mt-6 ml-2 text-green-500">+12.10%</p>
                </div>
            </div> */}

            <div className='mt-32 ml-8'>
                <a href="/Dashboard"><div className="flex h-12 bg-gradient-to-r rounded-tl-xl text-white from-blue-700 to-transparent border-b-2 mt-2 p-2 hover:from-yellow-600 hover:text-black hover:border-black">
                    <FontAwesomeIcon className="text-2xl" icon={faHome} />
                    <p className="text-xl font-bold ml-4 -mt-1">Home</p>
                </div></a>

                <a href="/Portfolio"><div className="flex h-12 bg-gradient-to-r rounded-tl-xl text-white from-blue-700 to-transparent border-b-2 mt-2 p-2 hover:from-yellow-600 hover:text-black hover:border-black">
                    <FontAwesomeIcon className="text-2xl" icon={faFire} />
                    <p className="text-xl font-bold ml-5 -mt-1">Portfolio</p>
                </div></a>
                <a href="/result"><div className="flex h-12 bg-gradient-to-r rounded-tl-xl text-white from-blue-700 to-transparent border-b-2 mt-2 p-2 hover:from-yellow-600 hover:text-black hover:border-black">
                    <FontAwesomeIcon className="text-2xl" icon={faHeart} />
                    <p className="text-xl font-bold ml-4 -mt-1">Watchlist</p>
                </div></a>
                <a href="/riskform"><div className="flex h-12 bg-gradient-to-r rounded-tl-xl text-white from-blue-700 to-transparent border-b-2 mt-2 p-2 hover:from-yellow-600 hover:text-black hover:border-black">
                    <FontAwesomeIcon className="text-2xl" icon={faBriefcase} />
                    <p className="text-xl font-bold ml-4 -mt-1">Trade</p>
                </div></a>
                <a href="visualization"><div className="flex h-12 bg-gradient-to-r rounded-tl-xl text-white from-blue-700 to-transparent border-b-2 mt-2 p-2 hover:from-yellow-600 hover:text-black hover:border-black">
                    <FontAwesomeIcon className="text-2xl" icon={faChartLine} />
                    <p className="text-xl font-bold ml-4 -mt-1">Strategies</p>
                </div></a>
                <a href="company"><div className="flex h-12 bg-gradient-to-r rounded-tl-xl text-white from-blue-700 to-transparent border-b-2 mt-2 p-2 hover:from-yellow-600 hover:text-black hover:border-black">
                    <FontAwesomeIcon className="text-2xl" icon={faBook} />
                    <p className="text-xl font-bold ml-4 -mt-1">Learning</p>
                </div></a>
            </div>

            {/* <div className="flex h-12">
                    <FontAwesomeIcon icon={faCoffee} />
                    <p>Profile</p>
                </div> */}


        </div>
    )
}

export default Sidebar