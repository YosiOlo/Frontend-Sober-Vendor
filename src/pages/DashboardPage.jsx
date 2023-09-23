import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Barchart from "../Components/Dashboard/Chart/ChartOne";
import ChartTwo from "../Components/Dashboard/Chart/ChartTwo";
import Statistic from "../Components/Dashboard/Statistic";
import TableDashboard from "../Components/Dashboard/TableDashboard";
import { recentOrders } from "../utils/data";
import NewOrders from "../Components/Dashboard/NewOrder";

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
      <div className="card p-6 text-[12px]">
      <h1 className="font-bold text-black">New Orders</h1>
          <NewOrders/>
          
        </div>
    </div>
  );
}

export default DashboardPage;
