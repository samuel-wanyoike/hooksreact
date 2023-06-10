import React, { useReducer, useState } from 'react';
import './App.css';


const ACTIONS = {
  ADD_TODO: 'add-todo'
}
function App() {
  const [todos, dispatch] = useReducer(reducer, { count: 0 });
  const [name, setName] =useState('');

  const handleSubmit = () => {
    dispatch({type: ACTIONS.ADD_TODO})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      </form>
    </div>
  );
}

export default App;


 