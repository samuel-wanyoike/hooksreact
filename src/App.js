import './App.css';
import { FunctionContext } from './functionContext';
import { ThemeProvider } from './ThemeContext';

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <FunctionContext />
      </ThemeProvider>
       
    </div>
  );
}

export default App;
