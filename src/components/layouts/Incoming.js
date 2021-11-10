import React from 'react';
import ButtonComponent from '../call/ButtonComponent';
import Avatar from './Avatar';
import './Incoming.scss';
import {loadcallAccept, loadCallDecline} from '../../assets/icons';

const Incoming = () => {
	const acceptCall = () => {

	}
	const denyCall = () => {

	}
	
	return (
		<div className='container container__incoming'>
			<Avatar />

			<div className='text'>
				<h2 className='text--username'>
					Visitor Name
				</h2>
				<h4 className='text--connecting'>188 8888 8888</h4>
				<h4 className='text--connecting'>Connecting...</h4>
			</div>

			<div className="btn-section">

				<div>
					<div className='button__decline' onClick={denyCall}>
						{loadCallDecline()}
					</div>
					<span class="text">Decline</span>
				</div>
				<div>
					<div className='button__accept' onClick={acceptCall}>
						{loadcallAccept()}
					</div>
					<span class="text">Accept</span>
				</div>
								
			</div>
			
		</div>
	);
};

export default Incoming;
