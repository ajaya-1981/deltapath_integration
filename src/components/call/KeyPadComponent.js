import React from 'react';
import PropTypes from 'prop-types';

const KeyPadComponent = ({ onClick }) => {
	return (
		<div className='keys'>
			<div className='key-row'>
				<button
					name='1'
					className='btn btn-circle btn-default'
					onClick={(e) => onClick(e.target.name)}
				>
					1
				</button>
				<button
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
				</button>
			</div>
			<div className='key-row'>
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
			</div>
			<div className='key-row'>
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
			</div>
			<div className='key-row'>
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
			</div>
		</div>
	);
};
KeyPadComponent.prototype = {
	sendDigit: PropTypes.func,
};
export default KeyPadComponent;