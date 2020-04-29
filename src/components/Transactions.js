import React ,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Transactions = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransactions} = useContext(GlobalContext)
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                         {transaction.text} <span>{sign}${transaction.amount}</span>
                         <button onClick={()=>deleteTransactions(transaction.id)}className="delete-btn">x</button>
        </li>
    )
}
