import { useState } from 'react'
import React from 'react'
import './b.css'
function BudgetContainer() {

  return (

      <div className="container">
      <h1>Define budget</h1>
      <input className="number" type="number" />
      <button className="send">DEFINE BUDGET</button>
    </div>
    
  )
}

export default BudgetContainer
