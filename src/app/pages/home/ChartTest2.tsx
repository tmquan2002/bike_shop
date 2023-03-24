import React, { useEffect, useState } from 'react';
// import customerMocks from '@assets/mocks/customers.json'
import './home.less'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        }
    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [100, 500, 200, 400, 700, 800, 1000],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [300, 400, 700, 600, 100, 200, 900],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const ChartTest2: React.FC = () => {
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //   //Get API here
    //   setTotal(customerMocks.length)
    //   setLoading(false)
    // }, [])
    return (
        <div className='big-stat right'>
            <div className='title'>CHART TEST</div>
            {/* <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div> */}
            <div className='result line'>
                <Line
                    redraw
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
};

export default ChartTest2;