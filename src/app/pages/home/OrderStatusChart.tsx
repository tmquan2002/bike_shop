import React, { useEffect, useState, useRef } from 'react';
import './home.less'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useNumArr } from '@app/hooks/use-state-custom';
import apiLinks from '@app/utils/api-links';

ChartJS.register(ArcElement, Tooltip, Legend);

const OrderStatusChart: React.FC = () => {
  const [data, setData] = useNumArr([])
  const [loading, setLoading] = useState(true)
  const rendered = useRef(true)

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
    //fetch status
    async function fetchStatus(status_id: number) {
      const res = await fetch(apiLinks.order.getStatus + status_id)
        .then((res) => res.json())
        .catch((error) => { console.log(error) })
      if (res.status === 200) {
        setData(old => [...old, res.length])
      }
    }
    //Run every status
    async function fetchAll() {
      await Promise.all([
        fetchStatus(1),
        fetchStatus(2),
        fetchStatus(3),
        fetchStatus(4),
      ])
    }
    if (rendered.current) {
      rendered.current = false
      fetchAll()
    }
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