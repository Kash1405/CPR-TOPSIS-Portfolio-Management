import React, { useState, useEffect } from 'react';

import Loader from '../components/Loader';

import allocation from '../photos/allocation.png'
import d_periods from "../photos/d_periods.png"
import drawdown from "../photos/drawdown.png"
import heatmap from "../photos/heatmap.png"
import rshape from "../photos/rvol.png"
import y_return from '../photos/y_returns.png'
import ret from '../photos/ret.png'
import rvol from '../photos/rvol.png'
import rbeta from '../photos/rbeta.png'
import retbench from '../photos/retbench.png'
import { Helmet } from 'react-helmet';
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';

function Visualization() {
    const [isLoading, setIsLoading] = useState(true);
    const [photo, setPhoto] = useState(allocation)
    const [months, setMonths] = useState("1")
    const [type, setType] = useState("close")

    useEffect(() => {
        const updateStateAfterDelay = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        };

        updateStateAfterDelay();
    }, []);

    const handlePhotograph = (data) => {
        if (data === "1" || data === "3" || data === "6") {
            setMonths(data)
        }
        else {
            setType(data)
        }

        console.log(months + type)
        setPhoto(months + type)
    }

    const photos = [
        allocation,
        d_periods,
        drawdown,
        heatmap,
        rshape,
        y_return,
        ret,
        rvol,
        rbeta,
        retbench
    ];

    return (
        isLoading ? <Loader /> : (
            <div className="flex">
                <Helmet>
                    <style>{'body { background-color: black; }'}</style>
                </Helmet>
                <Sidebar />
                <div >
                    <Topbar />
                    <div className="left-80 absolute top-20 m-20 w-1/2 grid p-5">
                        <p className='text-xl text-white font-bold p-5'>Results</p>
                        <div className='flex items-center justify-center'>
                            <div className="flex relative w-full lg:max-w-sm  ">
                                <select id="Select" onChange={e => handlePhotograph(e.target.value)} className="w-full mr-4 p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                    <option>Months</option>
                                    <option value="1">1 month</option>
                                    <option value="3">3 months</option>
                                    <option value="6">6 months</option>
                                </select>
                                <select id="Select" onChange={e => handlePhotograph(e.target.value)} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                    <option>Close/Volume/Return</option>
                                    <option value="close">Daily Close</option>
                                    <option value="volume">Daily Volume</option>
                                    <option value="return">Daily Return</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full p-5 mt-10 h-auto">
                            <img src={photo} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        )

    );
}

export default Visualization;
