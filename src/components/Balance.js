import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((sum, current) => sum + current, 0);

  return (
    <div>
        <h3>Balance</h3>
        <h1>${total}</h1>
    </div>
  )
}