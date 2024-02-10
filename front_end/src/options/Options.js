export const Bubbleoptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        title: {
          color: "#24A3D9",
          display: false,
          text: "Concepts",
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
          text: "Time Taken (seconds)",
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
      padding: {
        top: 50,
        bottom:40
      },
    },
  };


  export const line_Options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 5,
          color: "#517CA8",
          fontFamily: 'Lexend',
          family: 'Lexend',
          font: {
            color: "#517CA8",
            family: "Lexend",
          }
          // callback: function (value, index, ticks) {
          //    // return tempsubjects[index]
          //    return index
          // }
        },
      },
      y: {
        // grid: {
        //   display: false
        // }
        // min: 100,
  
        title: {
          display: true,
          text: "Scores",
          color: "#24A3D9",
          fontFamily: "Lexend",
          font: {
            weight: 600,
            size: 20,
          },
        },
        ticks: {
          stepSize: 5,
          maxTicksLimit: 6,
          color: "#517CA8",
          fontFamily: 'Inter',
          family: 'Inter',
          font: {
            weight: 400,
            size: 15,
            color: "#517CA8",
            family: "Lexend",
          }
          // callback: function (value, index, ticks) {
          //    return '' + value;
          // }
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // smooth lines
      },
    },
    plugins: {
      // tooltip: {
      //   enabled: false
      // },
      legend: {
        display: false,
        position: "top",
        align: "start",
  
        labels: {
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
    layout: {
      padding: {
        top: 100,
        bottom: 50,
      },
    },
  };
  
  export const backgroundColors = [
    "rgba(77, 51, 233, 0.6)",
    "rgba(218, 51, 233, 0.6)",
    "rgba(51, 233, 146, 0.6)",
    "rgba(51, 189, 233, 0.6)",
    "#F1848A",
    "rgba(192, 36, 89, 0.6)",
    "rgba(12, 163, 46, 0.6)",
    "rgba(31, 123, 240, 0.6)",
    "rgba(55, 97, 234, 0.6)",
    "rgba(234, 98, 15, 0.6)",
    "rgba(17, 185, 79, 0.6)",
    "rgba(84, 202, 27, 0.6)",
    "rgba(85, 172, 14, 0.6)",
    "rgba(43, 175, 52, 0.6)",
    "rgba(19, 82, 221, 0.6)",
    "rgba(255, 215, 51, 0.6)",
    "rgba(216, 52, 6, 0.6)",
    "rgba(28, 74, 53, 0.6)",
    "rgba(96, 26, 222, 0.6)",
    "rgba(96, 26, 222, 0.6)",
    "rgba(96, 26, 222, 0.6)",
  ];