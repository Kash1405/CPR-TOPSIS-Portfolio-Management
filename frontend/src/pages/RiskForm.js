import React from 'react';

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

function RiskForm() {
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
        <div className="flex flex-wrap justify-center">
            {photos.map((photo, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 p-2">
                    <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
    );
}

export default RiskForm;
