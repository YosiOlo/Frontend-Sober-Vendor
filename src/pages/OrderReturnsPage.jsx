import React from 'react';
import TopBar from '../Components/TopBar/TopBar';
import TableOrderReturns from '../Components/orderReturns/TableOrderReturns';

import { OrderReturns } from "../utils/data";
function OrderReturnsPage() {
  return (
    <div >
      <TopBar title="OrderReturns"/>
      <div className="p-5">
        
      <TableOrderReturns />
      </div>
    </div>
  )
}

export default OrderReturnsPage