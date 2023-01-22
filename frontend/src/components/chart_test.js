import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const StockChart = (props) => {
    return (
        <LineChart width={600} height={450} data={data} className="-ml-8">
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <Tooltip />
        </LineChart>
    );
}

export default StockChart;

let data = [
    {
        date: "2012-07-27",
        price: 13
    },
    {
        date: "2012-07-28",
        price: 11
    },
    {
        date: "2012-07-29",
        price: 15
    },
    {
        date: "2012-07-30",
        price: 16
    },
    {
        date: "2012-07-31",
        price: 18
    },
    {
        date: "2012-08-01",
        price: 13
    },
    {
        date: "2012-08-02",
        price: 22
    },
    {
        date: "2012-08-03",
        price: 23
    },
    {
        date: "2012-08-04",
        price: 20
    },
    {
        date: "2012-08-05",
        price: 17
    },
    {
        date: "2012-08-06",
        price: 16
    },
    {
        date: "2012-08-07",
        price: 18
    },
    {
        date: "2012-08-08",
        price: 21
    }]