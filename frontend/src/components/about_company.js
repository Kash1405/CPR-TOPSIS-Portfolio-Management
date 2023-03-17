import React from 'react'

function About() {
    return (
        <div>
            {/* About Box  */}
            <div>
                <p className='font-bold mb-2'>Details</p>
                <div className='flex justify-between w-3/4 mx-auto pl-24 pb-2 border-b-2'>
                    <p className='w-1/4 font-bold'>Exchange</p>
                    <p className='w-1/4'>NASDAQ</p>
                    <p className='w-1/4 font-bold'>Type</p>
                    <p className='w-1/4'>Common Stock</p>
                </div>
                <div className='flex justify-between w-3/4 pl-24 mx-auto pt-2'>
                    <p className='w-1/4 font-bold'>Sector</p>
                    <p className='w-1/4'>Technology</p>
                    <p className='w-1/4 font-bold'>Industry</p>
                    <p className='w-1/4'>Consumer Electronics</p>
                </div>
            </div>
            <p className='font-bold text-blue-500'><a href="https://apple.com">Website</a></p>
            <div>
                <p className='font-bold mb-2'>Description</p>
                <p>
                    Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other varieties of related services. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. Its products and services include iPhone, Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products, AppleCare, iCloud, digital content stores, streaming, and licensing services. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak in April 1976 and is headquartered in Cupertino, CA.
                </p>
            </div>
        </div>
    )
}

export default About