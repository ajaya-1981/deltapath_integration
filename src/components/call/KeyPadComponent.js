import React from 'react';
import PropTypes from 'prop-types';

const KeyPadComponent = ({ onClick }) => {
	const numbersWithAlphabets = [
		{ number: 1 },
		{ number: 2, keys: 'A B C' },
		{ number: 3, keys: 'D E F' },
		{ number: 4, keys: 'G H I' },
		{ number: 5, keys: 'J K L' },
		{ number: 6, keys: 'M N O' },
		{ number: 7, keys: 'P Q R S' },
		{ number: 8, keys: 'T U V' },
		{ number: 9, keys: 'W X Y Z' },
		{ number: 0, keys: '*' },
		{ number: '*' },
		{ number: '#' },
	];

	const pressNumber = (evt) => {
		let name = evt.target.closest('.btn.btn-circle').name;
		name && onClick(name);
	};

	const btns = numbersWithAlphabets.map((obj) => (
		<button
			key={obj.number}
			name={obj.number}
			className='btn btn-circle btn-default'
			onClick={pressNumber}
		>
			{obj.number}
			{obj.keys && <span>{obj.keys}</span>}
		</button>
	));

	return (
		<div className='keys'>
			<div className='key-row'>
				{btns}	
			</div>
		</div>
	);
};
KeyPadComponent.prototype = {
	sendDigit: PropTypes.func,
};
export default KeyPadComponent;
