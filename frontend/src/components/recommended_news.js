import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function RecommendedNews() {
    return (
        <div className='p-4'>
            <p className='font-bold mb-4'>Recommended News</p>
            <div className=' bg-black p-5'>
            
            <div className='flex w-100 justify-between border-b-2 border-yellow-600 rounded-lg h-8 pt-0 pb-1 px-4 mb-4'>
                <div className="flex">
                    <p className='mr-2'>Jan 1 | 12:00</p>
                    <p>TSLA : Happy New Year</p>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className="mt-1 text-red-500" icon={faArrowDown} />
                    <p className='ml-3'>0.251</p>
                </div>
            </div>
            <div className='flex w-100 justify-between border-b-2 border-yellow-600 rounded-lg h-8 pt-0 pb-1 px-4 mb-4'>
                <div className="flex">
                    <p className='mr-2'>Jan 1 | 12:00</p>
                    <p>TSLA : Happy New Year</p>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className="mt-1 text-red-500" icon={faArrowDown} />
                    <p className='ml-3'>0.251</p>
                </div>
            </div>
            <div className='flex w-100 justify-between border-b-2 border-yellow-600 rounded-lg h-8 pt-0 pb-1 px-4 mb-4'>
                <div className="flex">
                    <p className='mr-2'>Jan 1 | 12:00</p>
                    <p>TSLA : Happy New Year</p>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className="mt-1 text-red-500" icon={faArrowDown} />
                    <p className='ml-3'>0.251</p>
                </div>
            </div>
            <div className='flex w-100 justify-between border-b-2 border-yellow-600 rounded-lg h-8 pt-0 pb-1 px-4 mb-4'>
                <div className="flex">
                    <p className='mr-2'>Jan 1 | 12:00</p>
                    <p>TSLA : Happy New Year</p>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className="mt-1 text-red-500" icon={faArrowDown} />
                    <p className='ml-3'>0.251</p>
                </div>
            </div>
            <div className='flex w-100 justify-between border-b-2 border-yellow-600 rounded-lg h-8 pt-0 pb-1 px-4 mb-4'>
                <div className="flex">
                    <p className='mr-2'>Jan 1 | 12:00</p>
                    <p>TSLA : Happy New Year</p>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className="mt-1 text-red-500" icon={faArrowDown} />
                    <p className='ml-3'>0.251</p>
                </div>
            </div>
            <div className='flex w-100 justify-between border-b-2 border-yellow-600 rounded-lg h-8 pt-0 pb-1 px-4 mb-4'>
                <div className="flex">
                    <p className='mr-2'>Jan 1 | 12:00</p>
                    <p>TSLA : Happy New Year</p>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className="mt-1 text-red-500" icon={faArrowDown} />
                    <p className='ml-3'>0.251</p>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default RecommendedNews