import { useState, useCallback } from 'react';
import './App.css';
import { List } from './List'

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //the usecallback prevents running of the fuction during rerender unless the number changes
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])
  
  const themes = {
    background: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <div style={themes}>
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
      <List getItems={getItems}/>
    </div>
  );
}

export default App;


 