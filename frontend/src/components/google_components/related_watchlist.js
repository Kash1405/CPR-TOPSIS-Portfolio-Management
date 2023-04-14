import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function RelatedWatchlist() {
    return (
        <div className='m-5 p-5'>
            <p className='font-bold text-white'>Related to your Watchlist</p>
            
            <div className='m-4 flex justify-around'>
            <div className=' divide-x-2  flex w-[50rem] p-4 bg-blue-50 border-2 border-white overflow-x-auto rounded-xl bg-black '>
                
                
                <div className='flex p-2 '>
                    <p className='font-bold text-white mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 text-white rounded-xl hover:bg-yellow-600 hover:border-black hover:text-black'>Add to Watchlist</button>
                </div>
                
                

                <div className='flex p-2 '>
                    <p className='font-bold text-white mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 text-white rounded-xl hover:bg-yellow-600 hover:border-black hover:text-black'>Add to Watchlist</button>
                </div><div className='flex p-2 '>
                    <p className='font-bold text-white mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 text-white rounded-xl hover:bg-yellow-600 hover:border-black hover:text-black'>Add to Watchlist</button>
                </div><div className='flex p-2 '>
                    <p className='font-bold text-white mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 text-white rounded-xl hover:bg-yellow-600 hover:border-black hover:text-black'>Add to Watchlist</button>
                </div><div className='flex p-2 '>
                    <p className='font-bold text-white mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 text-white rounded-xl hover:bg-yellow-600 hover:border-black hover:text-black'>Add to Watchlist</button>
                </div><div className='flex p-2 '>
                    <p className='font-bold text-white mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 text-white rounded-xl hover:bg-yellow-600 hover:border-black hover:text-black'>Add to Watchlist</button>
                </div><div className='flex p-2 '>
                    <p className='font-bold text-white mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 text-white rounded-xl hover:bg-yellow-600 hover:border-black hover:text-black'>Add to Watchlist</button>
                </div>
                






                
                </div>
                
            </div>
        </div>
    )
}

export default RelatedWatchlist