import React from 'react'

import Watchlist from '../components/google_components/watchlist'
import NewsBox from '../components/google_components/news_box'
import RelatedWatchlist from '../components/google_components/related_watchlist'
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faCirclePlus } from '@fortawesome/free-solid-svg-icons'




function Portfolio() {
    return (
        <div className="flex">
            <Sidebar />
            <div >
                <Topbar />
            <div className="left-80 absolute top-20 ">
            <div className=" flex " >
            <Watchlist />
            </div>
            <div className=" place-content-stretch content-between bg-black">
            <NewsBox />
            </div >
            <div   >
            <RelatedWatchlist />
            </div>

</div>
</div>
        </div>
    )
}

export default Portfolio