import React from 'react'
import OrderInformation from './orderInformation';
import OrderStatus from './OrderStatus';
import Customer from './Customer';


function Index() {
    
  return (
    <div>
      <div className="flex gap-5">
        <div className="dataOrder">
      <OrderInformation />
      <OrderStatus/>
        </div>
        <Customer/>
      </div>
    </div>
  )
}

export default Index