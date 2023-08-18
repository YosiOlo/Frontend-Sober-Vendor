import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Barchart from "../Components/Dashboard/Chart/ChartOne";
import ChartTwo from "../Components/Dashboard/Chart/ChartTwo";
import Statistic from "../Components/Dashboard/Statistic";



function Dashboard() {
  return (
    <div>
      <TopBar title="Dashboard" />
      <div className="flex w-full ">
      <Barchart/>
      <ChartTwo/>
      <Statistic/>

      </div>
    </div>
  );
}

export default Dashboard;
