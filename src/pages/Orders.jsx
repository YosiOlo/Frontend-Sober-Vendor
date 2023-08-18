import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import TableOrders from "../Components/TableOrders";
import { orders } from "../utils/data";

function Orders() {
  const data = orders();
  return (
    <div className="">
      <TopBar title="Chats" />
      <div className="container p-4">
        <div className="card">
          <TableOrders
            tableData={data}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Orders;
