import './App.css';
import React, {useState} from 'react'
import Title from './component/Title'
import Home from './pages/Home'
import Counter from './pages/Counter'
import About from './pages/About'

function App() {

  const [Ack,SetAck] = useState(true);

  const Change = () => {
   SetAck(!Ack)   
 }

  return (
    <div className="App">
      
      {/* <Title name="Welcome Dhruvil" />
      <Title name="Greetings from TatvaSoft" />
      <Title name="Hello" />

      <Home />

      <Counter />

      <About /> */}

      {Ack  ? <Home />  : <About />}
      <button onClick= { Change }> Change </button>

    </div>
  );
}

export default App;
