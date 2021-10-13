import React, { useState } from 'react';
import './InputComponent.scss';
import { BsBackspace } from 'react-icons/bs';

const InputComponent = ({ keyPressed, deleteFromLast, onType }) => {
	const remove = () => {
		keyPressed = keyPressed.slice(0, -1);
		deleteFromLast(keyPressed);
	};
	const updateInputBox = (e) => {
		if(!isNaN(+e.nativeEvent.data)) {
			onType(e.nativeEvent.data);
		}
	}
	
	return (
		<div className='input-group input-group-lg input'>
			<input
				type='tel'
				value={keyPressed}
				onChange={updateInputBox}
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
