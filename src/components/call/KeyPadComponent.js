import React from 'react';
import PropTypes from 'prop-types';


const KeyPadComponent = ({ onClick }) => {
	const numbersWithAlphabets = [
		{number: 1},
		{number: 2, keys: 'A B C'},
		{number: 3, keys: 'D E F'},
		{number: 4, keys: 'G H I'}, 
		{number: 5, keys: 'J K L'},
		{number: 6, keys: 'M N O'},
		{number: 7, keys: 'P Q R S'}, 
		{number: 8, keys: 'T U V'},
		{number: 9, keys: 'W X Y Z'},
		{number: 0, keys: '*'}, 
		{number: '*'},
		{number: '#'},
	];

	const pressNumber = (evt) => {
		let name = evt.target.closest('.btn.btn-circle').name;
		name && onClick(name);
	}

	const btns = numbersWithAlphabets.map((obj) => (
		<button
		name={obj.number}
		className='btn btn-circle btn-default'
		//onClick={(e) => onClick(e.target.name)}
		onClick = {pressNumber}
	>
		{obj.number}
		{obj.keys &&  <span>{obj.keys}</span>}
	</button>
	));


	return (
		<div className='keys'>
			

			<div className='key-row'>
				{btns}
				{/* <button
					name='2'
					className='btn btn-circle btn-default'
					onClick={(e) => onClick(e.target.name)}
				>
					2
					<span>A B C</span>
				</button>
				<button
					name='3'
					className='btn btn-circle btn-default'
					onClick={(e) => onClick(e.target.name)}
				>
					3<span>D E F</span>
				</button> */}
			</div>
			{/* <div className='key-row'>
				<button
					name='4'
					className='btn btn-circle btn-default'
					onClick={() => onClick('4')}
				>
					4<span>G H I</span>
				</button>
				<button
					name='5'
					className='btn btn-circle btn-default'
					onClick={() => onClick('5')}
				>
					5<span>J K L</span>
				</button>
				<button
					className='btn btn-circle btn-default'
					onClick={() => onClick('6')}
				>
					6<span>M N O</span>
				</button>
			</div> */}
			{/* <div className='key-row'>
				<button
					className='btn btn-circle btn-default'
					onClick={() => onClick('7')}
				>
					7<span>P Q R S</span>
				</button>
				<button
					className='btn btn-circle btn-default'
					onClick={() => onClick('8')}
				>
					8<span>T U V</span>
				</button>
				<button
					className='btn btn-circle btn-default'
					onClick={() => onClick('9')}
				>
					9<span>W X Y Z</span>
				</button>
			</div> */}
			{/* <div className='key-row'>
				<button
					className='btn btn-circle btn-default'
					onClick={() => onClick('*')}
				>
					*
				</button>
				<button
					className='btn btn-circle btn-default'
					onClick={() => onClick('0')}
				>
					0
				</button>
				<button
					className='btn btn-circle btn-default'
					onClick={() => onClick('#')}
				>
					#
				</button>
			</div> */}
		</div>
	);
};
KeyPadComponent.prototype = {
	sendDigit: PropTypes.func,
};
export default KeyPadComponent;
