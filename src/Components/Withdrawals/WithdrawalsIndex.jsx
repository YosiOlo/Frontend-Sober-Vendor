import React from 'react'
import TopBar from '../TopBar/TopBar'
import WithdrawalsTable from './WithdrawalsTable'

function WithdrawalsIndex() {
  return (
    <div>
        <TopBar title="Withdrawals"/>
        <div className="p-4">
        <WithdrawalsTable/>
        </div>
    </div>
  )
}

export default WithdrawalsIndex