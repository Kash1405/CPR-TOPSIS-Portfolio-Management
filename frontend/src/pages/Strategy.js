import React from 'react'

import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';

import Dropdown from '../components/strategy_dropdown';

function Strategy() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-4/5">
                <Topbar />
                <div className="h-full flex-column scroll-smooth">
                    <div className='h-2/5 bg-green-200 flex'>
                        <div className='w-1/5 bg-red-200 p-2'>
                            <p className='text-lg'>Name: <b>Momentum Trading</b></p>
                            <p className='font-bold text-center mt-5 mb-2'>INDICATORS</p>
                            <Dropdown indicator="RSA" />
                            <Dropdown indicator="EMA" />
                            <Dropdown indicator="MACD" />

                        </div>
                        <div className='w-4/5 bg-blue-200'>
                            <img className="h-full w-full" src="https://www.investopedia.com/thmb/8rFuGF56jcdenXoR0I-pTbPR_48=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/death_cross-5bfd811ec9e77c0058b4be78" />
                        </div>
                    </div>
                    <div className='h-3/5 bg-red-200'>
                        bottom-block
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Strategy