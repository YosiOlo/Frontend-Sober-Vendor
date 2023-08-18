import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Barchart from "../Components/Dashboard/Chart/ChartOne";
import ChartTwo from "../Components/Dashboard/Chart/ChartTwo";

function Dashboard() {
  return (
    <div>
      <TopBar title="Dashboard" />
      <div className="flex ">
      <Barchart/>
      <ChartTwo/>

      </div>
    </div>
  );
}

export default Dashboard;
