import React, { useReducer, useState } from 'react';
import './App.css';
import { Todos } from './Todos';

//GLOBAL VARIABLE
export const ACTIONS = {
  ADD_TODO: 'add-todo',
  COMPLETE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
};

//REDUCER FUNCTION
function reducer(todos, action) {
  switch(action.type){

    case ACTIONS.ADD_TODO:
      return [...todos, newToDo(action.payload.name)];

    case ACTIONS.COMPLETE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete}
        }
        return todo;
      } );
    
    case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id);

    default:
      return todos;
        
  }
};

//defines the todo list objects
const newToDo = (name) => {
  return {id: Date.now(), name: name, complete: false}
};

//MAIN FUNCTION
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] =useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}});
    setName('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      </form>
      {todos.map((todo) => {
        return <Todos key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
    </div>
  );
}

export default App;


 