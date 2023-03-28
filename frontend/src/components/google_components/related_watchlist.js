import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function RelatedWatchlist() {
    return (
        <div>
            <p>Related to your Watchlist</p>
            <div className='w-1/5 px-4'>
                <div className='flex border-b-2 p-2'>
                    <p className='font-bold mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 rounded-xl'>Add to Watchlist</button>
                </div>
                <div className='flex border-b-2 p-2'>
                    <p className='font-bold mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 rounded-xl'>Add to Watchlist</button>
                </div>
                <div className='flex border-b-2 p-2'>
                    <p className='font-bold mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 rounded-xl'>Add to Watchlist</button>
                </div>
                <div className='flex border-b-2 p-2'>
                    <p className='font-bold mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 rounded-xl'>Add to Watchlist</button>
                </div>
                <div className='flex border-b-2 p-2'>
                    <p className='font-bold mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 rounded-xl'>Add to Watchlist</button>
                </div>
                <div className='flex border-b-2 p-2'>
                    <p className='font-bold mr-4'>Tesla Inc</p>
                    <div className="flex text-green-500 bg-green-200 p-1 h-8 border-green-200 rounded-lg mr-4">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                    <button className='border-2 py-1 px-2 rounded-xl'>Add to Watchlist</button>
                </div>
            </div>
        </div>
    )
}

export default RelatedWatchlist