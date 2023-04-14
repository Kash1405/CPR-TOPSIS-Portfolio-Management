import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function NewsBox() {
    const [newsData, setNewsData] = useState(newsDataItem)

    // useEffect(() => {
    //     let config = {
    //         method: 'get',
    //         maxBodyLength: Infinity,
    //         url: 'http://localhost:8080/v1/company/MSFT',
    //         headers: {}
    //     };

    //     axios.request(config)
    //         .then((response) => {
    //             setNewsData(response.data['company']["news_items"]);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });


    // }, [])

    return (
        newsData ? <div className='m-5 p-5 text-white' >
            <p className='font-bold text-lg'>Your Watchlist in the News</p>
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
                                <div className='flex w-28 px-2 border-2 bg-green-50 text-green-500 border-green-500 rounded-lg'>
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

const newsDataItem = [
    {
        "title": "Stock Market Rallies As 11 Bank Giants Aid First Republic, But FRC Dives Late; Apple, Microsoft Flash Buy Signals",
        "source": "https://finance.yahoo.com/m/deb0efc1-86f0-30b3-b4cc-ffb374ef8bb9/stock-market-rallies-as-11.html"
    },
    {
        "title": "Is This PayPal's Biggest Threat?",
        "source": "https://finance.yahoo.com/m/71c9d6dc-84ab-3c18-a891-d13b0aac4c59/is-this-paypal%27s-biggest.html"
    },
    {
        "title": "3 Big Tech Stocks are Holding Up the Entire Market",
        "source": "https://finance.yahoo.com/news/3-big-tech-stocks-holding-223010663.html"
    },
    {
        "title": "Stock Market Rebounds As 11 Bank Giants Aid First Republic; Apple, Microsoft Flash Buy Signals",
        "source": "https://finance.yahoo.com/m/deb0efc1-86f0-30b3-b4cc-ffb374ef8bb9/stock-market-rebounds-as-11.html"
    },
    {
        "title": "Lockdown Logic Rears Its Head in Stock Rally Running on Nerves",
        "source": "https://finance.yahoo.com/news/lockdown-logic-rears-head-stock-202158412.html"
    },
    {
        "title": "The Big Tech Layoffs Malaise Reveals A Deeper Truth",
        "source": "https://finance.yahoo.com/news/big-tech-layoffs-malaise-reveals-172319106.html"
    },
    {
        "title": "The Most Outrageous CEO Salaries and Perks",
        "source": "https://finance.yahoo.com/news/most-outrageous-ceo-salaries-perks-150002741.html"
    },
    {
        "title": "10 Stocks ChatGPT Says Will Make Me Rich in 10 Years",
        "source": "https://finance.yahoo.com/news/10-stocks-chatgpt-says-rich-143852562.html"
    },
    {
        "title": "3 ETFs That Can Supercharge Your Retirement Savings",
        "source": "https://finance.yahoo.com/m/9400738d-0e60-3e08-9779-792cc5e5939b/3-etfs-that-can-supercharge.html"
    },
    {
        "title": "Microsoft Stock: Bear vs. Bull",
        "source": "https://finance.yahoo.com/m/44e19bf9-ce23-39e7-9645-da73d9bca9c7/microsoft-stock%3A-bear-vs.-bull.html"
    }
]