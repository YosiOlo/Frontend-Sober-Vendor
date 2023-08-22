import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Barchart from "../Components/Dashboard/Chart/ChartOne";
import ChartTwo from "../Components/Dashboard/Chart/ChartTwo";
import Statistic from "../Components/Dashboard/Statistic";
import TableDashboard from "../Components/Dashboard/TableDashboard";
import { recentOrders } from "../utils/data";
import {BiShoppingBag} from 'react-icons/bi'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {HiOutlineDatabase} from 'react-icons/hi'




function Dashboard() {
  const data= recentOrders();
  return (
    <div>
      <TopBar title="Dashboard" />
      <div className="flex w-full ">
      <Barchart/>
      <ChartTwo/>
      <Statistic/>
      </div>
      <div className="card p-4">
          <TableDashboard  tableData={data}/>
          
        </div>
    </div>
  );
}

export default Dashboard;
