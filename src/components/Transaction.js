import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({transaction}) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={sign === '+' ? 'plus' : 'minus'}>
        <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
        <span>{transaction.text}</span>
        <span>{sign}${Math.abs(transaction.amount)}</span>
    </li>
  )
}
