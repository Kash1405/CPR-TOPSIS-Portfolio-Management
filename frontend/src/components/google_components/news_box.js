import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function NewsBox() {
    const [newsData, setNewsData] = useState(null)

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/v1/company/MSFT',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setNewsData(response.data['company']["news_items"]);
            })
            .catch((error) => {
                console.log(error);
            });


    }, [])

    return (
        newsData ? <div className='m-5 p-5' >
            <p className='font-bold'>Your Watchlist in the News</p>
            {
                Array.isArray(newsData) ? newsData.slice(0, 3).map((newsItem) =>
                    <a target="_blank" href={newsItem.source} rel="noreferrer">
                        <div className='m-4 flex border-t-2 px-10 py-4'>
                            <div className='mr-8'>
                                <div className='flex mb-2'>
                                    <p className='text-xs mr-3'>Yahoo Finance</p>
                                    <p className='text-xs mr-3'> - </p>
                                    <p className='text-xs'>Today</p>
                                </div>
                                <div className='mb-4'>
                                    <p className='text-lg'>{newsItem.title}</p>
                                </div>
                                <div className='flex w-28 px-2 border-2 rounded-lg'>
                                    <p className='text-sm'>AAPL</p>
                                    <div className="flex text-green-500 ml-3">
                                        <FontAwesomeIcon className="text-xs mt-1" icon={faArrowUp} />
                                        <p className='ml-1 text-sm'>0.251</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>) : ""
            }
        </div> : ""
    )
}

export default NewsBox