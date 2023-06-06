import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleResize)

    //removes the event listener when the useeffect is removed
    return window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App">

      {windowWidth}
    </div>
  );
}

export default App;
