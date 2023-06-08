import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');

 //useRef does not cause a rerender of the component when state is updated. it is not part of the component lifecycle
 const renderCount = useRef(0);

 useEffect(() => {
  renderCount.current = renderCount.current+1
  });

//use useRef to reference a HTML element
  const inputRef = useRef();
  const focus =() => {
    inputRef.current.focus();
  }

  //using a ref to store prevous value of a state
  const prevNameRef = useRef('');
  useEffect(() => {
    prevNameRef.current = name
  }, [name]);

  return (
    <div>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
      <div>my current name is: {name} but it used to be {prevNameRef.current}</div>
      <div>my render count is: {renderCount.current}</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
