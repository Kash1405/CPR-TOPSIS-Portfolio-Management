/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import NewsAlerts from '../components/recommended_news'
// import CompanyRecentTrends from '../components/company_recent_trends';
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
                <div className="flex-column scroll-smooth p-4  left-80 absolute top-20">

                    <div className='flex mb-8 '>
                        <a href="http://apple.com" >
                            <img className="h-30 w-20 m-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" />
                            </a>
                        <div className='flex bg-gray-200 border-gray-300 border-2 w-44 p-2 h-20 m-7 ml-20 rounded-md p-3 justify-center'>
                            {/* <img className="h-10 w-10 mt-1" src="https://media.istockphoto.com/id/1300548408/vector/growth-arrow-icon-green-arrow-up.jpg?s=612x612&w=0&k=20&c=n0NzPDJaU3bs9gVUT7_L-0Sf4Y5EtpYgfY2dM14fVW4=" /> */}
                            <div className='text-center'>
                                <p className='font-bold'>AAPL</p>
                                <p>USD {100} <span className='font-bold'>(2.02%)</span></p>
                            </div>
                        </div>
                        <button onClick={() => alert("Stock Added!")} className=' right-10 top-10 absolute rounded-full bg-gray-200 border-2 border-green-400 w-36 mt-6 h-10 px-4 ml-10'>Add to List</button>
                    </div>

                    <div>
                <div className='flex justify-between w-3/4 mx-auto pl-24 pb-2 border-b-2'>
                    <p className='w-1/4 font-bold'>Company</p>
                    <p className='w-1/4'>Apple</p>

                    <p className='w-1/4 font-bold'>Exchange</p>
                    <p className='w-1/4'>NASDAQ</p>

                    <p className='w-1/4 font-bold'>Ticker</p>
                    <p className='w-1/4'>AAPL</p>

                    <p className='w-1/4 font-bold'>Type</p>
                    <p className='w-1/4'>Common Stock</p>
                </div>
                <div className='flex justify-between w-3/4 pl-24 mx-auto pt-2'>
                <p className='w-1/4 font-bold'>Headquarters</p>
                    <p className='w-1/4'>California</p>
                    
                    <p className='w-1/4 font-bold'>Sector</p>
                    <p className='w-1/4'>Technology</p>

                    <p className='w-1/4 font-bold'>Industry</p>
                    <p className='w-1/4'>Consumer Electronics</p>

                    <p className='w-1/4 font-bold'>Established</p>
                    <p className='w-1/4'>1990</p>
                </div>
            </div>
                    <div className='flex flex-row justify-around '>
                    <div className='m-5 w-2/5 bg-blue-50 p-5'>
                    <About />
                    </div>
                    <div className='m-5 w-2/5'>
                    <KeyRatios />
                    </div>
                    </div>
                    
                    
                    


                    <NewsAlerts />
                    <div className='my-8'>
                        <p className='font-bold mb-4'>Related Stocks</p>
                        <div className='flex justify-between px-24'>
                            {
                                relatedStocks.map((relatedStock) => (
                                    <div className='flex bg-gray-200 border-gray-300 border-2 w-fit px-3 py-2 rounded-md mr-4'>
                                        <img className="h-10 w-10 mt-1" src="https://media.istockphoto.com/id/1300548408/vector/growth-arrow-icon-green-arrow-up.jpg?s=612x612&w=0&k=20&c=n0NzPDJaU3bs9gVUT7_L-0Sf4Y5EtpYgfY2dM14fVW4=" />
                                        <div className='ml-4 text-center'>
                                            <p className='font-bold'>{relatedStock.company}</p>
                                            <p>USD {relatedStock.price} <span className='font-bold'>({relatedStock.change}%)</span></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    
                    {/* <CompanyRecentTrends /> */}
                    
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
    // {
    //     company: 'META',
    //     price: 953.50,
    //     change: 2.242,
    // },
]