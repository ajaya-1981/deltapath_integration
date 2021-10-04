import React from 'react';
import ButtonComponent from '../call/ButtonComponent';
import { useHistory } from 'react-router';
import './History.scss';

//later it will be replaced with run time data
const dummyCallData = [
	{type:'outgoing', number: 'Username', datetime: '08/23 10:20:52'},
	{type:'outgoing', number: '1-800-444-4444', datetime: '08/23 10:20:52'},
	{type:'incoming', number: '1-607-234-4463', datetime: '08/23 10:20:52'}
];

const History = (props) => {
	const history = useHistory();
	const backToDialler = () => {
		history.push('/');
	}
	return (
		<div className='container history__container container-bkgrnd-white'>
			<div class="history__heading">
				<ButtonComponent
					align='left'
					icon='fa fa-angle-left'
					cssClass=''
					onClick={backToDialler}
				></ButtonComponent>
				<div class="text">Recent Calls</div>
			</div>
			<div class="history__call-section">
				{dummyCallData.map((callData) => (
					<div class="call-details">
						<span></span>
						<span>1-800-444-4444</span>
						<span class="date-time">09/23 10:40:21</span>
					</div>
				))};
			</div>
			
		</div>
	);
};

export default History;
