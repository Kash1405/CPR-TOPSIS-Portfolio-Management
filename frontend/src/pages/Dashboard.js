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
            <div className="w-4/5">
                <Topbar />
                <div className="flex-column scroll-smooth">
                    <div className="bg-blue-200 p-10 flex justify-between">
                        <PortfolioChart />
                        <RecommendedStocks />
                    </div>
                    <div className="bg-red-200">
                        <NewsAlerts />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard