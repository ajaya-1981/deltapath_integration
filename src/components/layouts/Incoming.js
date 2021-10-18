import React from 'react';
import Avatar from 'react-avatar';
import ButtonComponent from '../call/ButtonComponent';

const Incoming = () => {
	return (
		<div className='container container__incoming'>
			<div class="avatar"><i class="icon fa fa-user" aria-hidden="true"></i></div>
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
