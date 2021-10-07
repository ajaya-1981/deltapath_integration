import React from 'react';
import ButtonComponent from '../call/ButtonComponent';
import { useHistory } from 'react-router';
import './History.scss';
import { FcMissedCall } from 'react-icons/fc';
import { FiPhoneIncoming, FiPhoneOutgoing } from 'react-icons/fi';

//later it will be replaced with run time data
const dummyCallData = [
	{ type: 'recieved', number: 'Username', datetime: '08/23 10:20:52' },
	{ type: 'missed', number: '1-800-444-4444', datetime: '08/23 10:20:52' },
	{ type: 'dialed', number: '1-607-234-4463', datetime: '08/23 10:20:52' },
];

const History = (props) => {
	const history = useHistory();
	const backToDialler = () => {
		history.push('/');
	};
	return (
		<div className='container history__container container-bkgrnd-white'>
			<div className='history__heading'>
				<ButtonComponent
					align='left'
					icon='fa fa-angle-left'
					cssClass=''
					onClick={backToDialler}
				></ButtonComponent>
				<div className='text'>Recent Calls</div>
			</div>
			<div className='history__call-section'>
				{dummyCallData.map((callData) => (
					<div className='call-details' key={callData.type}>
						{/* <span class='FcMissedCall' aria-label='facebook'></span> */}
						{callData.type === 'missed' && <FcMissedCall></FcMissedCall>}
						{callData.type === 'recieved' && (
							<FiPhoneIncoming></FiPhoneIncoming>
						)}
						{callData.type === 'dialed' && <FiPhoneOutgoing></FiPhoneOutgoing>}
						<span>1-800-444-4444</span>
						<span className='date-time'>09/23 10:40:21</span>
					</div>
				))}
				;
			</div>
		</div>
	);
};

export default History;
