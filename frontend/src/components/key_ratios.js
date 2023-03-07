import React from 'react'

function KeyRatios() {
    return (
        <div className='w-2/5'>
            {/* Key Ratios */}
            {
                keyRatios.map((keyRatio) =>
                    <div className='flex w-full border-b-2'>
                        <p className='font-bold w-1/2'><a target="_blank" href={keyRatio.link} rel="noreferrer">{keyRatio.ratio}</a></p>
                        <p className=''>{keyRatio.value}</p>
                    </div>)
            }
        </div>
    )
}

export default KeyRatios


const keyRatios = [
    {
        ratio: 'P/E Ratio',
        link: "https://www.investopedia.com/",
        value: 24.9507
    },
    {
        ratio: 'Expected P/E',
        link: "https://www.investopedia.com/",
        value: 24.9507
    },
    {
        ratio: 'Expected PEG',
        link: "https://www.investopedia.com/",
        value: 24.9507
    },
    {
        ratio: 'Dividend Yield',
        link: "https://www.investopedia.com/",
        value: 24.9507
    },
    {
        ratio: 'Total Liabilities',
        link: "https://www.investopedia.com/",
        value: 24.9507
    },
    {
        ratio: 'Total Stockholder Equity',
        link: "https://www.investopedia.com/",
        value: 24.9507
    },
    {
        ratio: 'Debt/Equity',
        link: "https://www.investopedia.com/",
        value: 24.9507
    },
    {
        ratio: 'Total Current Assets',
        link: "https://www.investopedia.com/",
        value: 100000
    },
    {
        ratio: 'Total Current Liabilities',
        link: "https://www.investopedia.com/",
        value: 10000000
    },
    {
        ratio: 'Current Ratio',
        link: "https://www.investopedia.com/",
        value: 0.8794
    },
]