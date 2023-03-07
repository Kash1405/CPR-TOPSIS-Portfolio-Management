/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import NewsAlerts from '../components/news_alerts'
import CompanyRecentTrends from '../components/company_recent_trends';
import About from '../components/about_company'
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';
import KeyRatios from '../components/key_ratios';

function Dashboard() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-4/5">
                <Topbar />
                <div className="flex-column scroll-smooth p-4 left-80 absolute top-20">
                    <div className='flex mb-8'>
                        <img className="h-30 w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" />
                        <button onClick={() => alert("Stock Added!")} className='rounded-full bg-red-200 w-30 mt-6 h-10 px-4 ml-10'>Add to List</button>
                    </div>
                    <div>
                        <p className='font-bold'>Related Stocks</p>
                        <div className='flex justify-around px-24'>
                            {
                                relatedStocks.map((relatedStock) => (
                                    <div className='flex bg-red-200 w-fit px-3 py-2 rounded-md'>
                                        <img src="https://picsum.photos/10/5" />
                                        <div className='ml-4 text-center'>
                                            <p className='font-bold'>{relatedStock.company}</p>
                                            <p>USD {relatedStock.price} <span className='font-bold'>({relatedStock.change}%)</span></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <About />
                    <NewsAlerts />
                    <CompanyRecentTrends />
                    <KeyRatios />
                </div>
            </div>
        </div >
    )
}

export default Dashboard

const relatedStocks = [
    {
        company: 'AMZN',
        price: 93.50,
        change: -2.242
    },
    {
        company: 'TSLA',
        price: 93.50,
        change: -2.242
    },
    {
        company: 'GOOG',
        price: 93.50,
        change: -2.242
    },
    {
        company: 'META',
        price: 93.50,
        change: -2.242,
    },
    {
        company: 'META',
        price: 93.50,
        change: -2.242,
    },
]