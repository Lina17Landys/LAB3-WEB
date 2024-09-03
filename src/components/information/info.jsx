import React from 'react';
import ResetButton from '../resetBtn/resetBtn';
import CategoryFilter from '../category/category';
import ExpenseDisplay from '../expenses/expenses';
import './info.css';

function InfoDisplay({ budget, resetBudget }) { 
  return (
    <>
      <div className='btn-section'>
        <ResetButton resetBudget={resetBudget} /> {}
      </div>
      <div className='big-container'>
        <div className="budget-container">
          <div className="circle">
            <p>0% expended</p>
          </div>
          <div className="budget-info">
            <p>Budget: ${budget.toFixed(2)}</p>
            <p>Remaining: ${budget.toFixed(2)}</p>
            <p>Expense: $0.00</p>
          </div>
        </div>
      </div>

      <CategoryFilter/>
      <ExpenseDisplay/>
    </>
  );
}

export default InfoDisplay;
