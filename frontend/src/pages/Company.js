import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsBox from '../components/google_components/news_box'
import Loader from '../components/Loader'
// import NewsAlerts from '../components/recommended_news'
import About from '../components/about_company'
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';
import KeyRatios from '../components/key_ratios';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LOD } from 'three'

function Company() {
    const { ticker } = useParams()
    const [loading, setLoading] = useState(true)
    const [stockData, setStockData] = useState(null);
    const [financialData, setFinancialData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const companyResponse = await axios.get(`https://www.alphavantage.co/query`, {
                    params: {
                        function: 'OVERVIEW',
                        symbol: ticker,
                        apikey: '1B795HAEHEB3OKBI',
                    },
                });

                const globalQuoteResponse = await axios.get(`https://www.alphavantage.co/query`, {
                    params: {
                        function: 'GLOBAL_QUOTE',
                        symbol: ticker,
                        apikey: '1B795HAEHEB3OKBI',
                    },
                });

                setFinancialData(companyResponse.data);
                setStockData(globalQuoteResponse.data['Global Quote']);
                console.log({
                    financialData: companyResponse.data,
                    stockData: globalQuoteResponse.data['Global Quote']
                })
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);
    return (
        stockData ? (<div className="flex ">
            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            <Sidebar />
            <div className="w-4/5">
                <Topbar />
                <div className="flex-column scroll-smooth p-4  left-80 absolute top-20 text-white">

                    <div className='flex mb-8 '>
                        <a href="http://apple.com" >
                            <img className="h-30 w-20 m-5" src={"https://logo.stocklight.com/NASDAQ/" + ticker + "_icon.png"} />
                        </a>
                        <div className='flex bg-black border-yellow-600 border-2 w-44 p-2 h-20 m-7 ml-20 rounded-md p-3 justify-center'>
                            {/* <img className="h-10 w-10 mt-1" src="https://media.istockphoto.com/id/1300548408/vector/growth-arrow-icon-green-arrow-up.jpg?s=612x612&w=0&k=20&c=n0NzPDJaU3bs9gVUT7_L-0Sf4Y5EtpYgfY2dM14fVW4=" /> */}
                            <div className='text-center'>
                                <p className='font-bold'>{stockData['01. symbol']}</p>
                                <p> USD {Number(stockData['05. price']).toFixed(2)} <span className='font-bold'>(  {Number(stockData['09. change']).toFixed(2)})</span></p>
                            </div>
                        </div>
                        <button onClick={() => alert("Stock Added!")} className=' right-10 top-10 absolute rounded-full bg-black border-2 border-yellow-600 shadow-md shadow-yellow-500 w-36 mt-6 h-10 px-4 ml-10 hover:bg-yellow-600 hover:text-black hover:shadow-none'>Add to List</button>
                    </div>

                    <div>
                        <div className='flex justify-between w-3/4 mx-auto pl-24 pb-2 border-b-2 border-yellow-600'>
                            <p className='w-1/4 font-bold'>Company</p>
                            <p className='w-1/4'>{financialData.Name}</p>

                            <p className='w-1/4 font-bold'>Exchange</p>
                            <p className='w-1/4'>{financialData.Exchange}</p>

                            <p className='w-1/4 font-bold'>Ticker</p>
                            <p className='w-1/4'>{financialData.Symbol}</p>

                            <p className='w-1/4 font-bold'>Type</p>
                            <p className='w-1/4'>{financialData.AssetType}</p>
                        </div>
                        <div className='flex justify-between w-3/4 pl-24 mx-auto pt-2'>
                            <p className='w-1/4 font-bold'>Headquarters</p>
                            <p className='w-1/4'>{financialData.Country}</p>

                            <p className='w-1/4 font-bold'>Sector</p>
                            <p className='w-1/4'>{financialData.Sector}</p>

                            <p className='w-1/4 font-bold'>Industry</p>
                            <p className='w-1/4'>{financialData.Industry}</p>

                            <p className='w-1/4 font-bold'>Established</p>
                            <p className='w-1/4'>1990</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-around '>
                        <div className='m-5 w-2/5 bg-black  border-yellow-600 p-5'>
                            <About text={financialData.Description} />
                        </div>
                        <div className='m-5 w-2/5 bg-black border-yellow-600'>
                            <KeyRatios financialData={financialData} />
                        </div>
                    </div>

                    <NewsBox />
                    <div className='my-8 ml-5'>
                        <p className='font-bold mb-4'>Related Stocks</p>
                        <div className='flex justify-between px-24'>
                            {
                                relatedStocks.map((relatedStock) => (
                                    <a href={'/company/' + relatedStock.company}>
                                        <div className='flex bg-black border-2 border-yellow-600 w-fit px-3 py-2 rounded-md mr-4 shadow-md shadow-yellow-600 hover:bg-yellow-600 hover:text-black hover:shadow-none'>
                                            <img className="h-10 w-10 mt-1" src={"https://logo.stocklight.com/NASDAQ/" + relatedStock.company + "_icon.png"} />
                                            <div className='ml-4 text-center'>
                                                <p className='font-bold'>{relatedStock.company}</p>
                                                <p>USD {relatedStock.price} <span className='font-bold'>({relatedStock.change}%)</span></p>
                                            </div>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>


                    {/* <CompanyRecentTrends /> */}

                </div>
            </div>
        </div >) : <Loader />
    )
}

export default Company

const relatedStocks = [
    {
        company: 'AMZN',
        price: 93.50,
        change: 2.22
    },
    {
        company: 'TSLA',
        price: 9.50,
        change: 2.42
    },
    {
        company: 'GOOG',
        price: 97.50,
        change: 2.24
    },
    {
        company: 'META',
        price: 923.50,
        change: 2.42,
    },
    // {
    //     company: 'META',
    //     price: 953.50,
    //     change: 2.242,
    // },
]