import React, { useState } from 'react';
import './InputComponent.scss';
import { BsBackspace } from 'react-icons/bs';

const InputComponent = ({ keyPressed, deleteFromLast }) => {
	const [text, setText] = useState('');

	const remove = () => {
		keyPressed = keyPressed.slice(0, -1);
		deleteFromLast(keyPressed);
	};
	/* const changeNumber = (evt) => {
		setText(evt.target.value);
	} */

	return (
		<div className='input-group input-group-lg input'>
			<input
				type='tel'
				value={keyPressed}
				onChange={(e) => setText(e.target.value)}
				//onChange={changeNumber}
				className='form-control'
				placeholder='555-666-7777'
			/>
			{keyPressed && (
				<span className='icon-backspace' onClick={remove}>
					{/* <i className='fa fa-times fa-2x'></i> */}
					<BsBackspace></BsBackspace>
				</span>
			)}
		</div>
	);
};

export default InputComponent;
