import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

const  initialState =  {
    transactions: [],
}


// create context
export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({children}) => {
 const [state, dispatch] = useReducer(AppReducer, initialState);

 function deleteTransactions(id){
     dispatch({
         type: "deletetransaction",
         payload: id
     })
 }

 function addTransaction(transaction){
    dispatch({
        type: "addtransaction",
        payload: transaction
    })
 }

 return (
     <GlobalContext.Provider value={
         {transactions: state.transactions,
            deleteTransactions,
            addTransaction
        } 
     }>
         {children}
     </GlobalContext.Provider>
 )
}