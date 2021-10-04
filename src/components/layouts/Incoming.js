import React from 'react';
import Avatar from 'react-avatar';
import ButtonComponent from '../call/ButtonComponent';

const Incoming = () => {
	return (
		<div className='container container-bkgrnd-white'>
			<Avatar name='Foo Bar' className='avatar-align' size={100} round='50px' />

			<div className='div-margin-top'>
				<h2 id='callingName' className='text-white'>
					User Name
				</h2>
				<h4 id='connecting' className='text-white'>
					Connecting...
				</h4>
				{/* <ButtonComponent
					align='left'
					cssClass='endCall'
					icon='fa fa-phone'
					// onClick={onClick}
				></ButtonComponent> */}
				{/* <button name='endcall' className='btn btn-circle endCall'>
					<i className='fa fa-phone'></i>
				</button> */}
				<div className='btn-row'>
					<span>Accept</span>
					<ButtonComponent
						align='left'
						cssClass='Accept'
						icon='fa fa-phone'
						// onClick={onClick}
					></ButtonComponent>
					<ButtonComponent
						align='right'
						icon='fa fa-phone'
						cssClass='Reject'
						// onClick={onClick2}
					></ButtonComponent>
				</div>
			</div>
		</div>
	);
};

export default Incoming;
