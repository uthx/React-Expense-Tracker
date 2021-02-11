import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Initial State
const initialState = {
  transactions: [],
};

//Create context: this global context will be used when we want to play with the state..
export const GlobalContext = createContext(initialState);

//Provider Component: is a component that will wrap other components (child/consumer components) and these consumer components
//will be able to use the state with the help of global context
export const GlobalProvider = ({ children }) => {
  //so below is the initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions:this function is just a way to call the
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      //the data inside inside value is what we are passing to the consumer compoenets
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
