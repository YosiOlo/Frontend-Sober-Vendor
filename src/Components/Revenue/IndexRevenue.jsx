import React from 'react'
import { Revenue } from '../../utils/data'
import RevenueTable from './RevenueTable';

function IndexRevenue() {
    const data = Revenue();
  return (
    <div>
        <RevenueTable DataRevenue={data} />
    </div>
  )
}

export default IndexRevenue