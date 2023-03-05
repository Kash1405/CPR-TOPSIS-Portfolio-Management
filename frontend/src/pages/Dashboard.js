import React from 'react'

import PortfolioChart from "../components/portfolio_chart";
import RecommendedStocks from "../components/recommended_stocks";
import NewsAlerts from "../components/news_alerts";
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';

function Dashboard() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="left-80 absolute w-4/5">
                <Topbar />
                <div className="flex-column scroll-smooth top-20 absolute w-max left-40 py-20">
                    <div className="flex justify-between">
                        <PortfolioChart />
                        <RecommendedStocks />
                    </div>
                    <div className="">
                        <NewsAlerts />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard