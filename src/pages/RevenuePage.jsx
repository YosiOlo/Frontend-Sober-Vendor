import React from 'react';
import TopBar from '../Components/TopBar/TopBar';
import IndexRevenue from '../Components/Revenue/IndexRevenue';

function RevenuePage() {
  return (
    <div >
      <TopBar title="Revenue"/>
      <div className='p-5 '>
      <IndexRevenue/>

      </div>
    </div>
  )
}

export default RevenuePage