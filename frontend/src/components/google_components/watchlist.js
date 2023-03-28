import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Watchlist() {
    return (
        <div>
            <p className='font-medium'>Watchlist</p>
            <div className='border-t-2 border-black w-1/3'>
                <div className='flex border-b-2 border-black py-2 w-full px-8'>
                    <img src="https://picsum.photos/40/20" className='mr-2' />
                    <p className='text-400 font-medium mr-6'>Dow Jones Industrial Index</p>
                    <p className='font-bold mr-6'>USD 32,237.53</p>
                    <p className='font-bold mr-6'>+132.28</p>
                    <div className="flex text-green-500 bg-green-200 p-1 border-green-200 rounded-lg">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                </div>
                <div className='flex border-b-2 border-black py-2 w-full px-8'>
                    <img src="https://picsum.photos/40/20" className='mr-2' />
                    <p className='text-400 font-medium mr-6'>Dow Jones Industrial Index</p>
                    <p className='font-bold mr-6'>USD 32,237.53</p>
                    <p className='font-bold mr-6'>+132.28</p>
                    <div className="flex text-green-500 bg-green-200 p-1 border-green-200 rounded-lg">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                </div>
                <div className='flex border-b-2 border-black py-2 w-full px-8'>
                    <img src="https://picsum.photos/40/20" className='mr-2' />
                    <p className='text-400 font-medium mr-6'>Dow Jones Industrial Index</p>
                    <p className='font-bold mr-6'>USD 32,237.53</p>
                    <p className='font-bold mr-6'>+132.28</p>
                    <div className="flex text-green-500 bg-green-200 p-1 border-green-200 rounded-lg">
                        <FontAwesomeIcon className="mt-1" icon={faArrowUp} />
                        <p className='ml-3'>0.251</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watchlist