import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //in this useMemo, in only calls the function inside when the number changes, stores the number in the memory
  const doubleNumber = useMemo(() => {
   return slowFunction(number)
  }, [number])

  //REFERENTIAL OF AN OBJECT OR ARRAY
  //the useMemo is used to ensure the themestyle object does not change unless the dark variable changes.
  //an object changes everytime it is rerendered hence in this case the object is only referred to when dark changes 
  const themeStyles = useMemo(() => {
    return {
      background: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black' 
    }
  }, [dark])

  useEffect(() => {
    console.log('theme changed')
  }, [themeStyles])
 

  return (
    <div>
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

const slowFunction = (num) => {
  console.log('calling slow function');
  for (let i = 0; i <=100000000000; i++) {}
  return num * 2
}

export default App;


 