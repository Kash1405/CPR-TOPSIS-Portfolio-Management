import React from 'react'

import Chart_Test from '../components/chart_test'

import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';

function Dashboard() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-4/5">
                <Topbar />
                <div className="flex-column scroll-smooth p-4">
                    <div className='flex mb-8'>
                        <img className="h-30 w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" />
                        <div className='mt-7 ml-8'>
                            <p className='text-3xl font-bold'>USD 2791.15</p>
                            <p className='text-lg font-bold text-green-500'> 4.5(10%)</p>
                        </div>
                        <div className='flex-column mt-3 ml-20'>
                            <div className='flex justify-between'>
                                <p className='text-2xl mr-10'><b>Open:</b> USD 1000</p>
                                <p className='text-2xl mr-10'><b>Close:</b> USD 1000</p>
                                <p className='text-2xl mr-10'><b>Value:</b> USD 1000</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-2xl mr-10'><b>Low:</b> USD 1000</p>
                                <p className='text-2xl mr-10'><b>High:</b> USD 1000</p>
                                <p className='text-2xl mr-10'><b>Volume:</b> USD 1000</p>
                            </div>
                        </div>
                        <button onClick={() => alert("Stock Added!")} className='rounded-full bg-red-200 w-30 mt-6 h-10 px-4 ml-10'>Add to List</button>
                    </div>
                    <Chart_Test />
                </div>
            </div>
        </div >
    )
}

export default Dashboard