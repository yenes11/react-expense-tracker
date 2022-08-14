import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(t => t.amount);
  const income = amounts.filter(a => a > 0).reduce((sum, current) => sum + current, 0);
  const expense = amounts.filter(a => a < 0).reduce((sum, current) => sum + Math.abs(current), 0);

  return (
    <div className='inc-exp-container'>
        <div id='inc'>
            <h4>Income</h4>
            <h3>${income}</h3>
        </div>
        <div id='exp'>
            <h4>Expense</h4>
            <h3>${expense}</h3>
        </div>
    </div>
  )
}