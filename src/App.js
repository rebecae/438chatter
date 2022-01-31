import './App.css';
import TextInput from './TextInput';
import { useState } from 'react';
import Header from './Header';

function App() {
  const [messages, setMessages] = useState([]);

  function sendMessage(msg) {
    console.log(' MY MESSAGE', msg);
    setMessages([...messages, msg]);
  }

  console.log(messages);

  return (
    <div className="App">
      <Header />
      <div className ='messages'> 
        {messages.map((msg)=>{
          return <div className='message'>{msg}</div>;
        })}
      </div>
      <TextInput sendMessage={sendMessage} />
     </div>
  );
}

export default App;
