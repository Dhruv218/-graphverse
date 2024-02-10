import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const Bubbleoptions = {
    responsive: true,
    maintainAspectRatio: false,
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
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        title: {
          color: "#24A3D9",
          display: false,
          text: "Special Score",
          font: {
            weight: 600,
            size: 20,
          },
        },
        ticks: {
          stepSize: 5,
          // callback: function (value, index, ticks) {
          //    // return tempsubjects[index]
          //    return index
          // }
          color: "#517CA8",
          fontFamily: 'Lexend',
          family: 'Lexend',
          padding:30,
          font: {
            weight: 400,
            size: 15,
            color: "#517CA8",
            family: "Lexend",
          },
        },
      },
      y: {
        beginAtZero: true,
        // grid: {
        //   display: false
        // }
        // min: 100,
  
        title: {
          display: true,
          text: "Start And End Year",
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
    layout: {
    },
  };


export function Bubblee({data}) {
  return <Bubble options={Bubbleoptions} data={data} />;
}
