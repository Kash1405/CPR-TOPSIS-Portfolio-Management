import React, { useState } from 'react'
import Chart from "react-apexcharts";
import bg from '../components/backdrop.jpg';
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
                plugin:{
                    legend: {
                        display: 'true',
                        position: 'bottom',
                        labels: {
                            color: 'rgb(255, 99, 132)'
                        }
                    }
                }
                
            }
        }]
    })

    const [series, setSeries] = useState([44, 55, 13, 43, 22])
    return (
        <div className="border-2 border-yellow-600 rounded-xl p-5 pb-10 h-2/3 w-max mr-10 " style={{ backgroundImage: `url(${bg})`}}>
            <p className='text-center font-bold mb-10 text-white'>Your Portfolio</p>
            <Chart options={options} series={series} type="pie" width={450} />
        </div>
    )
}

export default PortfolioChart