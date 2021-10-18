import React from 'react';
import PropTypes from 'prop-types';

const KeyPadComponent = ({ onClick }) => {
	const numbersWithAlphabets = [
		{ number: 1 },
		{ number: 2, keys: 'ABC' },
		{ number: 3, keys: 'DEF' },
		{ number: 4, keys: 'GHI' },
		{ number: 5, keys: 'JKL' },
		{ number: 6, keys: 'MNO' },
		{ number: 7, keys: 'PQRS' },
		{ number: 8, keys: 'TUV' },
		{ number: 9, keys: 'WXYZ' },
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
