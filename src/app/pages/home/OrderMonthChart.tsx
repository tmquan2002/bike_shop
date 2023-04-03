import React, { useEffect, useState } from 'react';
import orderMocks from '@assets/mocks/orders.json'
import './home.less'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { countOrderEachMonth } from '@app/utils/helpers';
import { useNumArr } from '@app/hooks/use-state-custom';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        }
    }
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const OrderMonthChart: React.FC = () => {
    const [data2016, setData2016] = useNumArr([])
    const [data2017, setData2017] = useNumArr([])
    const [data2018, setData2018] = useNumArr([])
    const [loading, setLoading] = useState(true)
    const data = {
        responsive: true,
        labels,
        datasets: [
            {
                label: '2016',
                data: data2016,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: '2017',
                data: data2017,
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
            {
                label: '2018',
                data: data2018,
                borderColor: 'rgb(255, 206, 86)',
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
            }
        ]
    };
    useEffect(() => {
        //Get API here
        const dateData = orderMocks.map((v) => v.orderDate)
        setData2016(countOrderEachMonth(dateData, 2016))
        setData2017(countOrderEachMonth(dateData, 2017))
        setData2018(countOrderEachMonth(dateData, 2018))
        setLoading(false)
    }, [setData2016, setData2017, setData2018])
    return (
        <div className='big-stat right'>
            <div className='title'>NUMBER OF ORDERS EACH MONTH 2016-2018</div>
            <div className='result line'>
                {loading === true ? '. . .' : <Line redraw data={data} options={options} />}
            </div>
        </div>
    );
};

export default OrderMonthChart;