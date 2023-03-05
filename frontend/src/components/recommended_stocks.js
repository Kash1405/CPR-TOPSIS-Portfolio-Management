import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function RecommendedStocks() {
    return (
        <div className='px-10 pb-2 h-auto border-2 border-black rounded-xl ml-2'>
            <p className='text-center font-bold mb-4'>Recommended Stocks</p>
            {
                stockData.map((data) =>
                    <div className='flex w-96 justify-between border-2 border-black rounded-lg h-8 py-1 px-2 mb-2'>
                        <p>{data.name}</p>
                        <div className="flex -mt-1">
                            <FontAwesomeIcon className={data.icon === faArrowDown ? "mt-1 text-red-500" : "mt-1 text-green-500"} icon={data.icon} />
                            <p className='ml-3'>{data.price}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

const stockData = [
    {
        name: 'TSLA',
        icon: faArrowDown,
        price: 0.251
    },
    {
        name: 'TSLA',
        icon: faArrowDown,
        price: 0.251
    },
    {
        name: 'TSLA',
        icon: faArrowDown,
        price: 0.251
    },
    {
        name: 'MSFT',
        icon: faArrowUp,
        price: 1.251
    },
    {
        name: 'AMZN',
        icon: faArrowDown,
        price: 2.251
    },
    {
        name: 'AMZN',
        icon: faArrowDown,
        price: 2.251
    },
    {
        name: 'GOOG',
        icon: faArrowUp,
        price: 3.251
    },
    {
        name: 'SOL',
        icon: faArrowDown,
        price: 4.251
    },
    {
        name: 'AAPL',
        icon: faArrowUp,
        price: 0.251
    },
    {
        name: '0670.HK',
        icon: faArrowDown,
        price: 1.251
    },
    // {
    //     name: 'LVMH',
    //     icon: faArrowUp,
    //     price: 2.251
    // },
    // {
    //     name: '0700.HK',
    //     icon: faArrowDown,
    //     price: 0.251
    // },

]

export default RecommendedStocks