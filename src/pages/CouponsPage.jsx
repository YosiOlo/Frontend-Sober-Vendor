import React from 'react';
import TopBar from '../Components/TopBar/TopBar';
import TableCoupons from '../Components/Coupons/TableCoupons';

function CouponsPage() {
  return (
    <div>
      <TopBar title="Coupons"/>
      <TableCoupons/>
    </div>
  )
}

export default CouponsPage