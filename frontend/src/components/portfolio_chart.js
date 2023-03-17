import React, { useState } from 'react'
import Chart from "react-apexcharts";

function PortfolioChart() {
    const [options, setOptions] = useState({
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['BTC', 'TSLA', 'GOOG', 'MSFT', 'AMZN'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    })

    const [series, setSeries] = useState([44, 55, 13, 43, 22])
    return (
        <div className="border-2 border-black rounded-xl px-2 pb-10 h-2/3 w-max mr-10">
            <p className='text-center font-bold mb-10'>Your Portfolio</p>
            <Chart options={options} series={series} type="pie" width={450} />
        </div>
    )
}

export default PortfolioChart