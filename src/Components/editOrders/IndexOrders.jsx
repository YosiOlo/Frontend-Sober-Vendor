import React from "react";
import OrderInformation from "./OrderInformation";
import SideMenu from "./SideMenu"

function IndexOrders() {
  return (
    <div className="p-4 flex flex-wrap gap-4">
      <OrderInformation />
      <SideMenu />
    </div>
  );
}

export default IndexOrders;
