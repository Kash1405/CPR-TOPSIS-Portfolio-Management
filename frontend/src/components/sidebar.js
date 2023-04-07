import React from 'react'
import Logo from "./Logo.png"
import BG from "./backdrop.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFire, faHeart, faBriefcase, faChartLine, faBook } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <div className="w-80 h-screen px-10 py-5 fixed border-gray-300 border-r-2 bg-gradient-to-b from-blue-500 to-transparent" >
            <div className='flex  justify-evenly '>
                <img src={Logo} alt="ATX" width={150} height={500} />
            </div>

            <div className="h-20 bg-white rounded-lg mt-10 pt-2 pb-4 px-3 bg-green-200">
                <p className="text-sm">Current Portfolio</p>
                <div className='flex '>
                    <p className="font-bold text-center my-auto text-4xl ml-5">$1200</p>
                    <p className="font-bold text-center my-auto text-sm mt-6 ml-2 text-green-500">+12.10%</p>
                </div>
            </div>

            <div className='mt-10 ml-8'>
                <div className="flex h-12">
                    <FontAwesomeIcon className="text-2xl" icon={faHome} />
                    <p className="text-xl font-bold ml-4 -mt-1">Home</p>
                </div>
                <div className="flex h-12">
                    <FontAwesomeIcon className="text-2xl" icon={faFire} />
                    <p className="text-xl font-bold ml-5 -mt-1">Portfolio</p>
                </div>
                <div className="flex h-12">
                    <FontAwesomeIcon className="text-2xl" icon={faHeart} />
                    <p className="text-xl font-bold ml-4 -mt-1">Watchlist</p>
                </div>
                <div className="flex h-12">
                    <FontAwesomeIcon className="text-2xl" icon={faBriefcase} />
                    <p className="text-xl font-bold ml-4 -mt-1">Trade</p>
                </div>
                <div className="flex h-12">
                    <FontAwesomeIcon className="text-2xl" icon={faChartLine} />
                    <p className="text-xl font-bold ml-4 -mt-1">Strategies</p>
                </div>
                <div className="flex h-12">
                    <FontAwesomeIcon className="text-2xl" icon={faBook} />
                    <p className="text-xl font-bold ml-4 -mt-1">Learning</p>
                </div>
            </div>

            {/* <div className="flex h-12">
                    <FontAwesomeIcon icon={faCoffee} />
                    <p>Profile</p>
                </div> */}


        </div>
    )
}

export default Sidebar