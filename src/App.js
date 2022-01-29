import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  
  function sendMessage(msg) {
    console.log(' MY MESSAGE', msg);
    setMessage(msg);
  }

  return (
    <div className="App">
      <header className='header'> 
        <div className='logo' />
        <span className='title'>CHATTER!</span>
      </header>
      <div className ='messages'> {message} </div>
      <TextInput sendMessage={sendMessage} />
     </div>
  );
}

export default App;
