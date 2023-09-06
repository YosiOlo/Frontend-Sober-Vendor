import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import TableOrders from "../Components/orders/TableOrders";

function OrdersPage() {
  return (
    <div className="">
      <TopBar title="Orders" />
      <div className="container p-4">
        <div className="card">
          <TableOrders
          />
          
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
