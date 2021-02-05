import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .map((t) => t.amount)
    .filter((t) => t >= 0)
    .reduce((acc, curr) => acc + curr);
  const expense = Math.abs(
    transactions
      .map((t) => t.amount)
      .filter((t) => t < 0)
      .reduce((acc, curr) => acc + curr)
  );

  return (
    <>
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </>
  );
};

export default IncomeExpense;
