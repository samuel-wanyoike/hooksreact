import { useState, useTransition } from 'react';
import './App.css';

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const LIST_SIZE = 2000;

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition (() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++){
        l.push(e.target.value)
      };
      setList(l)
    })

  };


  return (
    <div className="App">
      <input type='text' value={input} onChange={handleChange} />
      {list.map((item) => {
        return <div >{item}</div>
      })}

    </div>
  );
}

export default App;