import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { Radarr } from "../Radar/Radar";
import { Pollar } from "../polararea/Polararea";
import { Bubblee } from "../bubble/Bubble";
import { Arealine } from "../arealine/Arealine";
import { backgroundColors } from "../../options/Options";
import { Stackedchart } from "../stackedchart/Stackedchart";
export const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState("");
  const [order, setorder] = useState("");
  const [arealine_data, setarealine_data] = useState();
  const [Bubble_data, setBubble_data] = useState();
  const [piechart_data, setpiechart_data] = useState();
  const [piechart_data2, setpiechart_data2] = useState();
  const [stackedbarchart, setstackedbarchart] = useState();
  const base_url = process.env.REACT_APP_BACKEND_BASEURL;

  function sectorvsstart_end_year(sort) {
    const startDateArray = data.map((obj, idx) => ({
      x: (idx + 1) * 5,
      y: obj.start_year,
      r: (obj.impact + obj.relevance + obj.likelihood + obj.intensity) % 40,
    }));

    const endDateArray = data.map((obj, idx) => ({
      x: (idx + 1) * 5,
      y: obj.end_year,
      r: (obj.impact + obj.relevance + obj.likelihood + obj.intensity) % 40,
    }));

    const datas = {
      datasets: [
        {
          label: "Start Year",
          data: startDateArray,
          backgroundColor: backgroundColors[0],
        },
        {
          label: "End Year",
          data: endDateArray,
          backgroundColor: backgroundColors[2],
        },
      ],
    };

    console.log(datas);

    setBubble_data(datas);
  }
  function countryvsspecialscore() {
    let labels = [];
    let relevance = [];
    let impact = [];
    let intensity = [];
    let likelihood = [];
    data.map((it) => {
      if (it && it.country) {
        labels.push(it.country);
      }
      if (it && it.relevance) {
        relevance.push(it.relevance);
      }
      if (it && it.impact) {
        impact.push(it.impact);
      }
      if (it && it.intensity) {
        intensity.push(it.intensity);
      }
      if (it && it.likelihood) {
        likelihood.push(it.likelihood);
      }
    });

    const datass = {
      labels,
      datasets: [
        {
          label: "Intensity",
          data: intensity,
          backgroundColor: backgroundColors[0],
        },
        {
          label: "Relevance",
          data: relevance,
          backgroundColor: backgroundColors[1],
        },
        {
          label: "Impact",
          data: impact,
          backgroundColor: backgroundColors[2],
        },
        {
          label: "Likelihood",
          data: likelihood,
          backgroundColor: backgroundColors[3],
        },
      ],
    };
    setstackedbarchart(datass);
  }

  function sectorvsintensity(sort) {
    const sectorIntensities = {};

    data.forEach((item) => {
      const sector = item.sector;
      const intensity = item.intensity;

      if (sectorIntensities[sector]) {
        sectorIntensities[sector] =
          (sectorIntensities[sector] + intensity) % 100;
      } else {
        sectorIntensities[sector] = intensity;
      }
    });

    let sortedSectorIntensities;

    if (sort) {
      sortedSectorIntensities = Object.entries(sectorIntensities).sort(
        ([, intensityA], [, intensityB]) => {
          if (order === "Ascending") {
            return intensityA - intensityB;
          } else {
            return intensityB - intensityA;
          }
        }
      );
    } else {
      sortedSectorIntensities = Object.entries(sectorIntensities);
    }

    const keysArray = sortedSectorIntensities.map(([key, _]) => key);
    const valuesArray = sortedSectorIntensities.map(([_, value]) => value);

    setarealine_data({
      labels: keysArray,
      datasets: [
        {
          fill: true,
          data: valuesArray,
          borderColor:
            backgroundColors[
              Math.floor(Math.random() * backgroundColors.length)
            ],
          backgroundColor:
            backgroundColors[
              Math.floor(Math.random() * backgroundColors.length)
            ],
        },
      ],
    });
  }

  function sectorvsintensity2() {
    const sectorIntensities = {};

    data.forEach((item) => {
      const sector = item.sector;
      const intensity = item.intensity;

      if (sectorIntensities[sector]) {
        sectorIntensities[sector] =
          (sectorIntensities[sector] + intensity) % 100;
      } else {
        sectorIntensities[sector] = [intensity];
      }
    });

    const keysArray = Object.keys(sectorIntensities);
    const valuesArray = Object.values(sectorIntensities);

    setpiechart_data2({
      labels: keysArray,
      datasets: [
        {
          label: "No. of Intensity",
          data: valuesArray,
          backgroundColor: backgroundColors.slice(0, keysArray?.length),
          borderwidth: 1,
        },
      ],
    });
  }


  function sectorvslikelhood() {
    const sectorIntensities = {};

    data.forEach((item) => {
      const sector = item.sector;
      const intensity = item.likelihood;

      if (sectorIntensities[sector]) {
        sectorIntensities[sector] =
          (sectorIntensities[sector] + intensity) % 100;
      } else {
        sectorIntensities[sector] = [intensity];
      }
    });

    const keysArray = Object.keys(sectorIntensities);
    const valuesArray = Object.values(sectorIntensities);

    setpiechart_data({
      labels: keysArray,
      datasets: [
        {
          label: "No. of Likelihood",
          data: valuesArray,
          backgroundColor: backgroundColors.slice(0, keysArray?.length),
          borderwidth: 1,
        },
      ],
    });
  }

  function sortByKey(arr, key) {
    const sortOrder = order.toLowerCase() === "descending" ? -1 : 1;
    return arr.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1 * sortOrder;
      }
      if (a[key] > b[key]) {
        return 1 * sortOrder;
      }
      return 0;
    });
  }

  useEffect(() => {
    axios
      .get(`${base_url}/sampledata`)
      .then((response) => {
        // Handle the successful response here
        console.log(response, "asddfk");
        setData(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (filter !== "") {
      if (filter == "intensity") {
        sectorvsintensity(true);
      }
      setData(sortByKey(data, filter));

      if (filter == "start_year" || filter == "end_year") {
        sectorvsstart_end_year();
      }
      if (
        filter == "impact" ||
        filter == "relevance" ||
        filter == "intensity" ||
        filter == "likelihood"
      ) {
        countryvsspecialscore();
        sectorvsstart_end_year();
      }
    }
    console.log(data, filter, order);
  }, [filter, order]);

  useEffect(() => {
    if (data?.length > 0) {
      sectorvslikelhood();
      sectorvsintensity();
      sectorvsstart_end_year();
      countryvsspecialscore();
      sectorvsintensity2()
    }
  }, [data]);

  return (
    <div className="p-8">
      <div className="flex justify-center w-full gap-4 items-center">
        <p className="text-[#26435F] text-[18px] font-medium"> Filter</p>
        <select
          onChange={(e) => {
            setfilter(e.target.value);
          }}
          value={filter}
          className="bg-transparent outline-none minimal px-4 py-2 text-[#26435F] text-[15px] font-normal hover:border-[#FFA28D] rounded-md border-[#D0D5DD] border-2"
        >
          <option value="" selected disabled hidden>
            None
          </option>
          <option
            className="text-[#26435F] underline cursor-pointer"
            value="country"
          >
            Country
          </option>
          <option
            className="text-[#26435F] underline cursor-pointer"
            value="intensity"
          >
            Intensity
          </option>
          <option
            className="text-[#26435F] underline cursor-pointer"
            value="likelihood"
          >
            Likelihood
          </option>
          <option
            className="text-[#26435F] underline cursor-pointer"
            value="sector"
          >
            Sector
          </option>
          <option
            className="text-[#26435F] underline cursor-pointer"
            value="region"
          >
            Region
          </option>
          <option
            className="text-[#26435F] underline cursor-pointer"
            value="impact"
          >
            Impact
          </option>
          <option
            className="text-[#26435F] underline cursor-pointer"
            value="topic"
          >
            Topic
          </option>
          <option
            className="text-[#26435F] underline cursor-pointer"
            value="source"
          >
            Source
          </option>
          <option
            className="text-[#26435F] underline cursor-pointer"
            value="end_year"
          >
            End year
          </option>
          <option
            className="text-[#26435F] underline cursor-pointer"
            value="start_year"
          >
            Start year
          </option>
        </select>

        <p className="text-[#26435F] text-[18px] ml-4 font-medium">Order </p>
        <select
          onChange={(e) => {
            setorder(e.target.value);
          }}
          value={order}
          className="bg-transparent outline-none minimal px-4 py-2 text-[#26435F] text-[15px] font-normal hover:border-[#FFA28D] rounded-md border-[#D0D5DD] border-2"
        >
          <option value="" selected disabled hidden>
            None
          </option>
          <option
            className="text-[#26435F] underline cursor-pointer"
            value="Descending"
          >
            Descending
          </option>
          <option
            className="text-[#26435F] underline cursor-pointer"
            value="Ascending"
          >
            Ascending
          </option>
        </select>
      </div>
      <div className="w-full flex flex-col justify-center gap-4">
        <p className="text-[#26435F] font-semibold ml-[4rem]  whitespace-nowrap text-[17px] mt-8">
          Intensity V/S Sector
        </p>
        <div className="flex justify-center gap-[24px] flex-row h-[620px]">
        <div className="w-[65%] mx-auto overflow-x-auto  p-8 rows-box-shadow bg-white rounded-md  canvas-scroller-2 flex flex-col h-full">
          <div
            style={{ width: arealine_data?.labels?.length * 100 }}
            className="h-[550px]"
          >
            {arealine_data && <Arealine data={arealine_data} />}
          </div>
        </div>
         
       <div className="flex flex-col justify-between items-center w-[40%] h-full">
       <div className="rows-box-shadow bg-white rounded-md p-8 w-[80%] h-[48%]">
            {piechart_data2 && <Radarr data={piechart_data2} />}
          </div>
          <div className="rows-box-shadow bg-white rounded-md p-8 w-[80%] h-[48%]">
            {piechart_data2 && <Pollar data={piechart_data2} />}
          </div>
         
       </div>
          </div>
        <p className="text-[#26435F] font-semibold ml-[4rem] whitespace-nowrap text-[17px] mt-8">
          Likelihood V/S Sector
        </p>
        <div className=" flex flex-row justify-center my-8 ml-[3.5rem] !mt-0 w-[93%] items-center gap-4">
          <div className="w-[50%]  rows-box-shadow bg-white rounded-md p-8  h-[500px]">
            {piechart_data && <Pollar data={piechart_data} />}
          </div>
          <div className="w-[50%]  rows-box-shadow bg-white rounded-md p-8  h-[500px]">
            {piechart_data && <Radarr data={piechart_data} />}
          </div>
        </div>
        <p className="text-[#26435F] font-semibold ml-[4rem] whitespace-nowrap text-[17px] ">
          Start And End Year Vs Special Scores
        </p>
        <div className="w-[93%] mx-auto overflow-x-auto rows-box-shadow bg-white rounded-md !pb-0 p-8 canvas-scroller-2 flex flex-col  h-[620px]">
          <div style={{ width: data?.length * 25 }} className="h-[550px]">
            {Bubble_data && <Bubblee data={Bubble_data} />}
          </div>
        </div>
        <p className="text-[#26435F] font-semibold ml-[4rem] whitespace-nowrap text-[17px] ">
          Special Score VS Country
        </p>
        <div className="w-[93%] mx-auto overflow-x-auto rows-box-shadow bg-white rounded-md !pb-0 p-8 canvas-scroller-2 flex flex-col h-[620px]">
          <div style={{ width: data?.length * 55 }} className="h-[550px]">
            {stackedbarchart && <Stackedchart data={stackedbarchart} />}
          </div>
        </div>
      </div>
    </div>
  );
};
