import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFire, faHeart, faBriefcase, faChartLine, faBook } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <div className="bg-green-200 w-1/5 h-screen px-10 py-10">
            <img src="https://picsum.photos/200/40" className="m-auto" />
            <div className="h-20 bg-red-200 rounded-lg mt-10 flex">
                <p className="w-1/2 font-bold text-center my-auto">$1200</p>
                <p className="font-bold text-center my-auto">+12.10%</p>
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