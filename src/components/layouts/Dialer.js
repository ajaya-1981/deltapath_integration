import React, { Fragment, useState } from 'react';
import KeyPadComponent from '../call/KeyPadComponent';
import InputComponent from '../call/InputComponent';
import ButtonComponent from '../call/ButtonComponent';
import { useHistory } from 'react-router-dom';
import History from './History';

const Dialer = () => {
	const [result, setResult] = useState('');
	const [showHistory, setShowHistory] = useState(false);
	const history = useHistory();
	const sendDigit = (val) => {
		setResult(result + val);
	};
	var deltapath;
	const onClick = () => {
		console.log('Call');
		// deltapath = DeltapathInit(deltapath);
		history.push('/Connecting');
	};
	const onClick2 = () => {
		setShowHistory(true);
		history.push('/history');
		console.log('nnnnns');
	};
	return (
		<Fragment>
			<div className='row'>
				<div className='container container-bkgrnd-white'>
					<InputComponent keyPressed={result}></InputComponent>
					<KeyPadComponent onClick={sendDigit}></KeyPadComponent>
					<div className='btn-row'>
						<ButtonComponent
							cssClass='call'
							icon='fa fa-phone'
							onClick={onClick}
						></ButtonComponent>
						<ButtonComponent
							icon='fa fa-clock-o'
							cssClass='history'
							onClick={onClick2}
						></ButtonComponent>
					</div>
				</div>
				{/* <div className='history-panel'>
					{showHistory && <History></History>}
				</div> */}
			</div>
		</Fragment>
	);
};

export default Dialer;
function DeltapathInit(deltapath) {
	deltapath = new window.Deltapath(
		'junction.deltapath.com',
		'8000',
		'9ug5QtSN',
		'https'
	);
	console.log('Init done');
	deltapath.onInitialize = (e) => {
		console.log('onInitialize');
		console.log(e);
	};
	deltapath.onCallUpdate = (e) => {
		console.log('onCallUpdate');
		console.log(e);
	};
	deltapath.onPresenceUpdate = (e) => {
		// console.log('onPresenceUpdate');
		// console.log(e);
	};
	deltapath.defaultEventHandler = (e) => {
		// console.log('defaultEventHandler');
		// console.log(e);
	};
	(async () => {
		try {
			while (true) {
				const err = await deltapath.connect();
				if (!err) {
					console.log('connected with user '.concat(deltapath.username));
					break;
				}
			}
		} finally {
			// await deltapath.disconnect();
		}
	})();
	return deltapath;
}
