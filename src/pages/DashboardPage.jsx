import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Barchart from "../Components/Dashboard/Chart/ChartOne";
import ChartTwo from "../Components/Dashboard/Chart/ChartTwo";
import Statistic from "../Components/Dashboard/Statistic";
import TableDashboard from "../Components/Dashboard/TableDashboard";
import { recentOrders } from "../utils/data";

function DashboardPage() {
  const data= recentOrders();
  return (
    <div>
      <TopBar title="Dashboard" />
      <div className="flex flex-wrap">
      <Barchart/>
      <ChartTwo/>
      <Statistic/>
      </div>
      <div className="card p-4 text-[12px]">
          <TableDashboard  DataDashboard ={data}/>
          
        </div>
    </div>
  );
}

export default DashboardPage;
