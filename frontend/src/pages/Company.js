import React from 'react'

import NewsAlerts from '../components/news_alerts'
import CompanyRecentTrends from '../components/company_recent_trends';
import About from '../components/about_company'
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';

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
                    <About />
                    <NewsAlerts />
                    <CompanyRecentTrends />
                    <div className='w-2/5'>
                        {/* Key Ratios */}
                        {
                            keyRatios.map((keyRatio) =>
                                <div className='flex w-full border-b-2'>
                                    <p className='font-bold w-1/2'>{keyRatio.ratio}</p>
                                    <p className=''>{keyRatio.value}</p>
                                </div>)
                        }
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Dashboard

const keyRatios = [
    {
        ratio: 'P/E Ratio',
        value: 24.9507
    },
    {
        ratio: 'Expected P/E',
        value: 24.9507
    },
    {
        ratio: 'Expected PEG',
        value: 24.9507
    },
    {
        ratio: 'Dividend Yield',
        value: 24.9507
    },
    {
        ratio: 'Total Liabilities',
        value: 24.9507
    },
    {
        ratio: 'Total Stockholder Equity',
        value: 24.9507
    },
    {
        ratio: 'Debt/Equity',
        value: 24.9507
    },
    {
        ratio: 'Total Current Assets',
        value: 100000
    },
    {
        ratio: 'Total Current Liabilities',
        value: 10000000
    },
    {
        ratio: 'Current Ratio',
        value: 0.8794
    },
]