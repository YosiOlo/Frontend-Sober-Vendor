import React from 'react'
import AddCoupons from './AddCoupons/AddCoupons'
import SideCoupons from './AddCoupons/SideCoupons'

function IndexCoupon() {
  return (
    <div className='flex gap-8 justify-center'>
        <AddCoupons/>
        <SideCoupons/>
    </div>
  )
}

export default IndexCoupon