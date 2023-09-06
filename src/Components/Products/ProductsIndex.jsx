import React from 'react'
import TableProducts from './TableProducts'
import TopBar from '../TopBar/TopBar'

function ProductIndex() {
  return (
    <div>
        <TopBar title="products"/>
        <div className="p-4">
        <TableProducts/>

        </div>
    </div>
  )
}

export default ProductIndex