import './App.css';
import TextInput from './TextInput';
import { useState } from 'react';
import Camera from 'react-snap-pic';
import NamePicker from "./NamePicker";
import Message from "./Message";

function App() {
  const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false);

  let [username, setUsername] = useState("");

  function sendMessage(text) {
    if (!text.trim()) return;

    const newMessage = {
      text: text,
      time: Date.now(),
      user: username,
    }
  }

  console.log(messages);

  function takePicture(img) {
    console.log(img)
    setShowCamera(false)
  }

  return (
    <div className="App">
      {showCamera && <Camera takePicture={takePicture} />}
      <header className='header'> 
				<div className='logo' />
				<span className='title'>The Pie Hole</span>
				<NamePicker setUsername={setUsername}/>
		  </header>

      <div className ='messages'> 
        {messages.map((msg, i) =>{
          return <Message {...msg} key = {i} fromMe={msg.user === username} />
        })}
      </div>
      <TextInput sendMessage={sendMessage} 
        showCamera={()=>setShowCamera(true)}
      />
     </div>
     
  );
}

export default App;
