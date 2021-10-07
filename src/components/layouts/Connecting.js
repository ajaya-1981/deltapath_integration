import React from 'react';
import Avatar from 'react-avatar';
import { useHistory } from 'react-router-dom';

const Connecting = () => {
	const history = useHistory();

	const endcall = () => {
		console.log('end call');
		history.push('/');
	};
	return (
		<div className='container container-bkgrnd-black'>
			<Avatar name='Foo Bar' className='avatar-align' size={100} round='50px' />

			<div className='div-margin-top'>
				<h2 id='callingName' className='text-white'>
					User Name
				</h2>
				<h4 id='connecting' className='text-white'>
					Connecting...
				</h4>
				<button
					name='endcall'
					className='btn btn-circle endCall'
					onClick={endcall}
				>
					<i className='fa fa-phone'></i>
				</button>
			</div>
		</div>
	);
};

export default Connecting;
