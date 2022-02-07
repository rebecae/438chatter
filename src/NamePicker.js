import { useState } from "react";

function NamePicker() {
	const [editName, setEditName] = useState(false);
	const [name, setName] = useState('');
	
	
	return (
    <div className='footer'>
		<button> </button>
      <input 
        className='username' 
        value={text} 
				onChange={(e) => setText(e.target.value)}  
				onKeyPress ={onKeyPress}
      />
    	<button className='send' onClick={send}>
      	↑
    	</button>
    </div>
	);


}

export default NamePicker;