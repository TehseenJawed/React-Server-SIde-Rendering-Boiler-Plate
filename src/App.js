import React , {useState} from 'react';
import './App.css';



function App() {
  const [state, setState] = useState(0)
  const Increament = () => {
    setState(state+1)
  }
  const Decrement = () => {
    setState(state-1)
  }
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={Increament}>Increament</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default App;
