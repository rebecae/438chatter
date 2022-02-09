import './App.css';
import TextInput from './TextInput';
import { useState } from 'react';
import Header from './Header';
import Camera from 'react-snap-pic';
import NamePicker from "./NamePicker";

function App() {
  const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false);

  function sendMessage(msg) {
    console.log(' MY MESSAGE', msg);
    setMessages([msg, ...messages]);
  }

  console.log(messages);

  function takePicture(img) {
    console.log(img)
    setShowCamera(false)
  }

  return (
    <div className="App">
      {showCamera && <Camera takePicture={takePicture} />}
      <Header />
      <div className ='messages'> 
        {messages.map((msg)=>{
          return <div className='message'>{msg}</div>;
        })}
      </div>
      <TextInput sendMessage={sendMessage} 
        showCamera={()=>setShowCamera(true)}
      />
     </div>
     
  );
}

export default App;
