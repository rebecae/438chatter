import { useState } from "react";
import {FiEdit} from "react-icons/fi";

function NamePicker() {
	const [editName, setEditName] = useState(false);
	const [name, setName] = useState('');
	
	function ok() {
		props.setUsername(name);
		setEditName(false);
	}

	if (editName) {
		return (
			<div className='name-picker'>
				<input 
					className="name-picker-input"
					onChange={(e) => editName(e.target.value)}
					value={name}
				></input>
				<button className="name-picker-button" onClick={ok}>
					OK
				</button>
			</div>
		);
  }

	return (
		<div className="name-picker">
			<span className="name-picker-name"> {name || "Set Username:"} </span>
			<FiEdit size="24" onClick={() => setEditName(true)} />
		</div>
	)

}

export default NamePicker;