import React from 'react'

function Watchlist() {
    return (
        <div className='m-5 p-5'>
            <p className='text-xl text-white font-bold'>Watchlist</p>
            <div className=' mt-5 flex overflow-x-auto border-2 rounded-xl border-yellow-600 w-[65rem] bg-white '>
                {
                    relatedStocks.map((stock) => (
                        <a href={"/company/" + stock.company}>
                            <div className='min-w-96 flex border-r-2 border-yellow-600 py-4 px-8 bg-black items-center justify-center'>
                                <img className="h-10 w-10 mt-1 mr-4" src={"https://logo.stocklight.com/NASDAQ/" + stock.company + "_icon.png"} />
                                <p className='text-400 text-white font-medium mx-2'>{stock.company}</p>
                                <p className='font-bold text-white mr-1 w-24'>$ {stock.price}</p>
                                <span className='text-green-500'>({stock.change})</span>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Watchlist

const relatedStocks = [
    {
        company: 'AMZN',
        price: 93.50,
        change: 2.22
    },
    {
        company: 'TSLA',
        price: 9.50,
        change: 2.42
    },
    {
        company: 'GOOG',
        price: 97.50,
        change: 2.24
    },
    {
        company: 'META',
        price: 923.50,
        change: 2.42,
    },
    {
        company: 'MSFT',
        price: 97.50,
        change: 2.24
    },
    {
        company: 'CPRT',
        price: 923.50,
        change: 2.42,
    },
]