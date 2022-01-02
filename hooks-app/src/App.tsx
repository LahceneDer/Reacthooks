import React from 'react';
import './App.css';
import UseContextComponent from './components/UseContextComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseStateComponent from './components/UseStateComponent';

function App() {
  return (
    <div className="App">
      <div className='usestate'>
        <h2>useState</h2>
        <UseStateComponent />
      </div>
      <div className='useeffect'>
        <h2>useEffect</h2>
        <UseEffectComponent />
      </div>
      <div className='useeffect'>
        <h2>useContext</h2>
        <UseContextComponent />
      </div>
    </div>
  );
}

export default App;
