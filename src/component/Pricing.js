import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Boxes.css";

const Pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <h1>About Rapid finance</h1>
      <div className="grids">
        <div data-aos="fade-up" className="boxes">
          Data from yFinance is stocked using two independent machines on our local MongoDB.
          For the sake of simplicity, we'll only be using data regarding the TSLA stock since we only dispose of two machines
        </div>
        <div data-aos="fade-right" className="boxes">
          That same data is being used to create our very own RESTFUL Api 
        </div>
        <div data-aos="fade-left" className="boxes">
          Since it's two machines and by synchronizing them, we're able to get live accurate data; we're talking seconds!
        </div>
        <div data-aos="flip-left" className="boxes">
          That data is accessible to clients through our Api link: 
          "http://35.180.156.119/stock/TSLA"
          We can use the link http://35.180.156.119/stock/TSLA/30 to check the prices at the day 30
          An extra "/" can be used to check for minutes/seconds
        </div>
      </div>
    </div>
  );
};

export default Pricing;
