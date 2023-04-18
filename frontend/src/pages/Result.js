import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import allocation from '../photos/allocation.png'
import d_periods from "../photos/d_periods.png"
import drawdown from "../photos/drawdown.png"
import heatmap from "../photos/heatmap.png"
import rshape from "../photos/rsharpe.png"
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
                    <div className="left-80 absolute m-20 w-1/2 grid p-5">
                        <p className='text-xl text-white font-bold p-5'>Results</p>
                        <div className='border-2 p-2 border-yellow-600'>
                            <div className=' flex items-center justify-center'>
                                <div className="relative w-full lg:max-w-sm  ">
                                    <select id="Select" onChange={e => setPhoto(e.target.value)} className="w-full p-2.5 text-white bg-black border rounded-md shadow-sm outline-none appearance-none focus:border-yellow-600">
                                        <option value={allocation}>--Select Graph--</option>
                                        <option value={d_periods}>Worst 5 Drawdown Periods</option>
                                        <option value={drawdown}>Underwater Plot</option>
                                        <option value={heatmap}>Monthly Returns (%)</option>
                                        <option value={rvol}>Rolling Volatility (6-Months)</option>
                                        <option value={rshape}>Rolling Sharpe (6-Months)</option>
                                        <option value={y_return}>EOY Returns vs Benchmark</option>
                                        <option value={ret}>Returns (6-Months)</option>
                                        <option value={rbeta}>Rolling Beta to Benchmark (6-Months)</option>
                                        <option value={retbench}>Cumulative Returns vs Benchmark (6-Months)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-full p-5 mt-10 h-auto">
                                <img src={photo} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <a href="/visualization"><button className='bg-black text-white hover:bg-yellow-600 hover:text-black hover:border-black border-2 border-white p-5 m-10 rounded-xl '>Check Graphical Visualizations</button></a>

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
