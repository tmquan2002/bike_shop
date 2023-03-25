import React, { useEffect, useState } from 'react';
import orderMocks from '@assets/mocks/orders.json'
import './home.less'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useNumArr } from '@app/hooks/use-state-custom';

ChartJS.register(ArcElement, Tooltip, Legend);

const OrderStatusChart: React.FC = () => {
  const [data, setData] = useNumArr([1, 2, 4, 5])
  const [loading, setLoading] = useState(true)

  const chartData = {
    labels: ['PENDING', 'PROCESSING', 'REJECTED', 'COMPLETED'],
    datasets: [
      {
        label: '# of Votes',
        data: data,
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)',]
      },
    ],
  };
  useEffect(() => {
    //Get API here
    const temp = [
      (orderMocks.filter((value) => value.status === 1)).length,
      (orderMocks.filter((value) => value.status === 2)).length,
      (orderMocks.filter((value) => value.status === 3)).length,
      (orderMocks.filter((value) => value.status === 4)).length
    ]
    setData(temp)
    setLoading(false)
  }, [setData])
  return (
    <div className='big-stat left'>
      <div className='title'>ORDER STATUS</div>
      {/* <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div> */}
      <div className='result bar'>
        {loading === true ? '. . .' : <Pie redraw data={chartData} />}
      </div>
    </div>
  );
};

export default OrderStatusChart;