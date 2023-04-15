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

function RiskForm() {
    const [isLoading, setIsLoading] = useState(true);
    const [photo, setPhoto] = useState(allocation)

    useEffect(() => {
        const updateStateAfterDelay = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        };

        updateStateAfterDelay();
    }, []);

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
                        <div className=' flex items-center justify-center'>
                            <div className="relative w-full lg:max-w-sm  ">
                                <select id="Select" onChange={e => setPhoto(e.target.value)} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                    <option>--Select Graph--</option>
                                    <option value={d_periods}>Worst 5 Drawdown Periods</option>
                                    <option value={retbench}>Underwater Plot</option>
                                    <option value={y_return}>Monthly Returns (%)</option>
                                    <option value={allocation}>Rolling Volatility (6-Months)</option>
                                    <option value={heatmap}>EOY Returns vs Benchmark</option>
                                    <option value={rvol}>Returns (6-Months)</option>
                                    <option value={rshape}>Rolling Beta to Benchmark (6-Months)</option>
                                    <option value={ret}>Cumulative Returns vs Benchmark (6-Months)</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full p-5 mt-10 h-auto">
                            <img src={photo} className="w-full h-full object-cover" />
                        </div>

                        <a href="/visualization"><button>Check Graphical Visualizations</button></a>

                        {/* <div className="flex flex-wrap justify-center">
                        {photos.map((photo, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 p-2">
                                <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div> */}

                    </div>
                </div>
            </div>
        )
    );
}

export default RiskForm;
