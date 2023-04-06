import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function NewsBox() {
    return (
        <div className='m-5 p-5' >
            <p className='font-bold'>Your Watchlist in the News</p>
            <div className='m-4 flex  justify-around border-t-2 px-10 py-4 '>
                <div className='mr-8'>
                    <div className='flex mb-2'>
                        <p className='text-xs mr-3'>Bloomberg.com</p>
                        <p className='text-xs mr-3'> - </p>
                        <p className='text-xs'>7 hours ago</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-lg'>Apple CEO Cook Returns to China to Speak at Key Corporate Summit</p>
                    </div>
                    <div className='flex w-28 px-2 border-2 rounded-lg'>
                        <p className='text-sm'>AAPL</p>
                        <div className="flex text-green-500 ml-3">
                            <FontAwesomeIcon className="text-xs mt-1" icon={faArrowUp} />
                            <p className='ml-1 text-sm'>0.251</p>
                        </div>

                    </div>
                </div>
                <img src="https://picsum.photos/100/50" />
            </div>
            <div className='m-4 flex  justify-around  border-t-2 px-10 py-4'>
                <div className='mr-8'>
                    <div className='flex mb-2'>
                        <p className='text-xs mr-3'>Bloomberg.com</p>
                        <p className='text-xs mr-3'> - </p>
                        <p className='text-xs'>7 hours ago</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-lg'>Apple CEO Cook Returns to China to Speak at Key Corporate Summit</p>
                    </div>
                    <div className='flex w-28 px-2 border-2 rounded-lg'>
                        <p className='text-sm'>AAPL</p>
                        <div className="flex text-green-500 ml-3">
                            <FontAwesomeIcon className="text-xs mt-1" icon={faArrowUp} />
                            <p className='ml-1 text-sm'>0.251</p>
                        </div>

                    </div>
                </div>
                <img src="https://picsum.photos/100/50" />
            </div>
            <div className='m-4 flex  justify-around border-b-2 border-t-2 px-10 py-4'>
                <div className='mr-8'>
                    <div className='flex mb-2'>
                        <p className='text-xs mr-3'>Bloomberg.com</p>
                        <p className='text-xs mr-3'> - </p>
                        <p className='text-xs'>7 hours ago</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-lg'>Apple CEO Cook Returns to China to Speak at Key Corporate Summit</p>
                    </div>
                    <div className='flex w-28 px-2 border-2 rounded-lg'>
                        <p className='text-sm'>AAPL</p>
                        <div className="flex text-green-500 ml-3">
                            <FontAwesomeIcon className="text-xs mt-1" icon={faArrowUp} />
                            <p className='ml-1 text-sm'>0.251</p>
                        </div>

                    </div>
                </div>
                <img src="https://picsum.photos/100/50" />
            </div>
        </div>


    )
}

export default NewsBox