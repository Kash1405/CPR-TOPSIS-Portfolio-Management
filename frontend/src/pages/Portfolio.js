import React from 'react'

import Watchlist from '../components/google_components/watchlist'
import NewsBox from '../components/google_components/news_box'
import RelatedWatchlist from '../components/google_components/related_watchlist'
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';

import { Helmet } from 'react-helmet';


function Portfolio() {
    return (
        <div className="flex">


            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            <Sidebar />
            <div>
                <Topbar />
                <div className="left-80 absolute top-20 ">
                    <div className=" flex " >
                        <Watchlist />
                    </div>
                    <div className="place-content-stretch content-between -mt-8">
                        <NewsBox />
                    </div >
                    <div>
                        <RelatedWatchlist />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio;