import React from 'react';
import './InputComponent.scss';
import { BsBackspace } from 'react-icons/bs';

const InputComponent = ({ keyPressed, deleteFromLast, onType, inputRef }) => {
	const remove = () => {
		keyPressed = keyPressed.slice(0, -1);
		deleteFromLast(keyPressed);
	};
	const updateInputBox = (e) => {
		if (!isNaN(+e.key)) {
			onType(e.key);
		} else if (e.key === 'Backspace') {
			remove();
		}
	};

	return (
		<div className='input-group input-group-lg input'>
			<input
				type='tel'
				value={keyPressed}
				onKeyDown={updateInputBox}
				className='form-control'
				placeholder='555-666-7777'
				onChange={() => {}}
				ref={inputRef}
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
