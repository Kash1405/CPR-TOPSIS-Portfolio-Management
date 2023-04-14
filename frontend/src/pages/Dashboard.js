import React from 'react'
import {Helmet} from 'react-helmet';

import PortfolioChart from "../components/portfolio_chart";
import RecommendedStocks from "../components/recommended_stocks";
import Sidebar from '../components/sidebar';
import NewsBox from '../components/google_components/news_box'
import Topbar from '../components/topbar';


function Dashboard() {
    return (
        
        <div className="flex " >
            <Helmet>
        <style>{'body { background-color: black; }'}</style>
    </Helmet>
            <Sidebar />
            <div className="left-80 absolute w-4/5" >
                <Topbar />
                <div className="flex-column scroll-smooth top-20 absolute left-40 -ml-10 pr-20 pt-5 bg-black " >
                    <div className="flex justify-between ">
                        <PortfolioChart />
                        <RecommendedStocks />
                    </div>
                    <div className="bg-black">
                        <NewsBox />
                        {/* <NewsAlerts /> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard