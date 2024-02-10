import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const option={
    responsive: true,
        maintainAspectRatio: false,
        plugins: {
            // tooltip: {
            //   enabled: false
            // },
            legend: {
                textOverflow: 'trim', 
		        textWidth: 34,
          
        
              labels: {
                display: false,
                usePointStyle: true,
                font: {
                  size: 14,
                  family: "Lexend",
                },
                marginBottom: 10,
                labelSpacing: 100,
                boxWidth: 120,
                pointStyle: "circle",
                radius: 7,
                padding: 5,
              },
              title: {
                padding: 20
        
              }
            },
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: false,
            },
            title: {
                display:true,
              color: "#24A3D9",
              text: "Sector",
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
              display: false,
              font: {
                weight: 400,
                size: 15,
                color: "#517CA8",
                family: "Lexend",
              },
            },
          },
          r: {
            ticks: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            grid:{
                display: false,
    
            },
            label:{
                display:false
            },
            title: {
              display: false,
              text: "Likelihood",
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
              display:false,
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

export function Radarr({data}) {
  return <Radar data={data} options={option} />;
}
