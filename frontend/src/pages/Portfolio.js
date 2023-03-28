import React from 'react'

import Watchlist from '../components/google_components/watchlist'
import NewsBox from '../components/google_components/news_box'
import RelatedWatchlist from '../components/google_components/related_watchlist'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function Portfolio() {
    return (
        <div>
            <Watchlist />
            <NewsBox />
            <RelatedWatchlist />

        </div>
    )
}

export default Portfolio