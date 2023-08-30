import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import TableOrders from "../Components/TableOrders";
import { orders } from "../utils/data";

function OrdersPage() {
  const data = orders();
  return (
    <div className="">
      <TopBar title="Orders" />
      <div className="container p-4">
        <div className="card">
          <TableOrders
            DataOrders={data}
          />
          
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
