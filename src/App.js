import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransactoin from "./components/AddTransactoin";
import { GlobalProvider } from "./context/GlobalState";
import IncomeExpense from "./components/IncomeExpense";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
      </div>
      <div className="inc-exp-container">
        <IncomeExpense />
      </div>
      <TransactionList />
      <AddTransactoin />
    </GlobalProvider>
  );
}

export default App;
