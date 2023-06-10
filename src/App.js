import React, { useReducer } from 'react';
import './App.css';


const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action) {

  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    default:
      return state
    
  }

}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT })
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT })
  };


  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;


 