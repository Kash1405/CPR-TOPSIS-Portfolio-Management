import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function RelatedWatchlist() {
    return (
        <div className='mx-5 p-5'>
            <p className='font-bold text-white -mt-8 mb-4'>Related to your Watchlist</p>

            <div className='flex justify-between px-24'>
                {
                    relatedStocks.map((relatedStock) => (
                        <a href={'/company/' + relatedStock.company}>
                            <div className='flex border-2 bg-yellow-600 border-yellow-600 w-fit px-3 py-2 rounded-md mr-4 shadow-md shadow-yellow-600 hover:bg-yellow-600 hover:text-black hover:shadow-none'>
                                <img className="h-10 w-10 mt-1" src={"https://logo.stocklight.com/NASDAQ/" + relatedStock.company + "_icon.png"} />
                                <div className='ml-4 text-center'>
                                    <p className='font-bold'>{relatedStock.company}</p>
                                    <p>USD {relatedStock.price} <span className='font-bold'>({relatedStock.change}%)</span></p>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>

            {/* <div className='m-4 flex justify-around'>
            <div className=' divide-x-2 divide-yellow-600  flex w-[50rem] p-4 bg-blue-50 border-2 border-yellow-600 overflow-x-auto rounded-xl bg-black '>
                
                
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
                
            </div> */}
        </div>
    )
}

export default RelatedWatchlist;

const relatedStocks = [
    {
        company: 'PYPL',
        price: 93.50,
        change: 2.22
    },
    {
        company: 'JD',
        price: 9.50,
        change: 2.42
    },
    {
        company: 'AVGO',
        price: 97.50,
        change: 2.24
    },
    {
        company: 'NVDA',
        price: 923.50,
        change: 2.42,
    },
]