import "nes.css/css/nes.min.css";
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "Netflix",
      amount: 11.99,
      date: new Date(2021, 3, 13)
    },
    {
      id: 1,
      title: "Netflix",
      amount: 11.99,
      date: new Date(2021, 3, 13)
    },
    {
      id: 2,
      title: "Xbox Game Pass",
      amount: 9.99,
      date: new Date(2021, 3, 17)
    },
    {
      id: 3,
      title: "Car Loan",
      amount: 447.34,
      date: new Date(2021, 3, 2)
    }
  ]
  return (
    <div className="container">
      <h1>My 8-bit Expenses Tracker</h1>
      <div className="container__expense-list">
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
