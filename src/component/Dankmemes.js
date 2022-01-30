import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Dankmemes = () => {
  const [chartData, setChartData] = useState({});
  const [Close, setClose] = useState([]);
  const [Datetime, setDatetime] = useState([]);

  const chart = () => {
    let cls = [];
    let dtime = [];
    let arrdata = [];
    axios
      .get("http://35.180.156.119/stock/TSLA/30")
      .then(res => {
        for (var i=0; i<12; i++) {
          arrdata.push(res.data[i]);
        }
        console.log(arrdata[1]);
        for (var i=0; i<12; i++) {
          cls.push(arrdata[i]["Close"]);
          dtime.push(arrdata[i]["Datetime"].slice(16,22));
        }
        console.log(cls);
        console.log(dtime);
        setChartData({
          labels: dtime,
          datasets: [
            {
              label: "TSLA stock",
              data: cls,
              backgroundColor: ["rgba(204, 19, 19, 0.747)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(cls, dtime);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>The fastest stock api in the market</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "TSLA stock evolution during the last 12hours", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Dankmemes;
