import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
        position: 'top',
        align: 'start',
        title: {
          position: 'start',
          display: true,
        },
      },
  },
  responsive: true,
  maintainAspectRatio: false,
    scales: {
    x: {
      stacked: true,
      grid: {
          display: false
        }
    },
    y: {
        stacked: true,

        beginAtZero: true,
        // grid: {
        //   display: false
        // }
        // min: 100,
  
        title: {
          display: true,
          text: "Special Score",
          color: "#24A3D9",
          margin:30,
          font: {
            weight: 600,
            size: 20,
          },
        },
        ticks: {
          stepSize: 5,
          maxTicksLimit: 6,
          color: "#517CA8",
          fontFamily: 'Lexend',
          family: 'Lexend',
          font: {
            weight: 400,
            size: 15,
            color: "#517CA8",
            family: "Lexend",
          },
          // callback: function (value, index, ticks) {
          //    return '' + value;
          // }
        },
      },
    
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       backgroundColor: 'rgb(255, 99, 132)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       backgroundColor: 'rgb(75, 192, 192)',
//     },
//     {
//       label: 'Dataset 3',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       backgroundColor: 'rgb(53, 162, 235)',
//     },
//   ],
// };

export function Stackedchart({data}) {
  return <Bar options={options} data={data} />;
}
