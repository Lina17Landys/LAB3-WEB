import React from 'react';
import './rbtn.css';

function ResetButton({ resetBudget }) {
  return (
    <>
      <button className='reset' onClick={resetBudget}>
        RESET APP
      </button>
    </>
  );
}

export default ResetButton;
