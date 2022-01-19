import React, { useState } from 'react';
// import './App.css';

function App () {
  /* Use state and assign ES6 array with SETA for state
  ** The React useState Hook allows us to track state in a function component.
  */
  const [count, setCount] = useState(0);

  // Arrow function to increment
  const increment = () => {
    setCount(count + 1);
  }

  // Arrow function to decrement
  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="app-counter" >
      <h1>Welcome, Counter App</h1>
      <div className="counter">
        <p> Count: {count}</p>
        <button onClick={decrement}> - </button>
        <button onClick={increment}> + </button>
      </div>
    </div>
  );
}

export default App;
