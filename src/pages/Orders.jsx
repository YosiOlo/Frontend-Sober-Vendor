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
            column1="aku"
            column2="tess"
            column3="aku"
            column4="tess"
            column5="aku"
            color="blue"
            tableData={data}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Orders;
