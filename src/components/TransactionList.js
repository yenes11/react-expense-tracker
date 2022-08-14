import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className='transaction-list'>
        <h2>History</h2>
        <ul>
          { transactions.map(transaction => (
             <Transaction transaction={transaction} key={transaction.id} />
          )) }
           
        </ul>
    </div>
  )
}
