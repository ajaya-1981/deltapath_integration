import React from 'react';
import Avatar from 'react-avatar';
import { useHistory } from 'react-router-dom';
import './Connecting.scss';

const Connecting = () => {
	const history = useHistory();

	const endcall = () => {
		console.log('end call');
		history.push('/');
	};
	return (
		<div className='container connecting__container'>
			<div className="avatar"><i className="icon fa fa-user" aria-hidden="true"></i></div>
			<div className='text'>
				<h2 id='callingName' className='text--username'>
					User Name
				</h2>
				<h4 className='text--connecting'>
					Connecting...
				</h4>
			</div>
			<div className="button__call btn btn-circle" onClick={endcall}>
				<i className='icon fa fa-phone'></i>
			</div>
		</div>
	);
};

export default Connecting;
