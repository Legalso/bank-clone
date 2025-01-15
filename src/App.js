import React from 'react';
import './styles/tailwind.css';
import './styles/style.css';
import Balance from './components/Balance';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Balance />
      <TransactionHistory />
    </div>
  );
}

export default App;
