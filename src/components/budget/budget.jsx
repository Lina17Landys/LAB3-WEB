import { useState } from 'react';
import React from 'react';
import InfoDisplay from '../information/info';
import ResetButton from '../resetBtn/resetBtn';
import './b.css';

function BudgetContainer() {
  const [budget, setBudget] = useState(null);
  const [isBudgetSet, setIsBudgetSet] = useState(false);

  const handleInputChange = (e) => {
    setBudget(Number(e.target.value));
  };

  const handleButtonClick = () => {
    if (budget > 0) {
      setIsBudgetSet(true);
    }
  };

  const resetBudget = () => {
    setBudget(null);
    setIsBudgetSet(false);
  };

  return (
    <>
      {!isBudgetSet ? (
        <div className="container">
          <h1>Define budget</h1>
          <input className='number' type='number'onChange={handleInputChange}/>
          <button className='send' onClick={handleButtonClick}>
            DEFINE BUDGET
          </button>
        </div>
      ) : (
        <InfoDisplay budget={budget} ResetButton resetBudget={resetBudget}/>
      )}
    </>
  );
}

export default BudgetContainer;
