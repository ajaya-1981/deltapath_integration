import React, { useState } from 'react';

const InputComponent = ({ keyPressed }) => {
	const [text, setText] = useState('');

	// setText(keyPressed);
	// console.log(keyPressed);
	return (
		<div className='input-group input-group-lg input'>
			<input
				type='tel'
				value={keyPressed}
				onChange={(e) => setText(e.target.value)}
				className='form-control'
				placeholder='555-666-7777'
			/>
		</div>
	);
};

export default InputComponent;
