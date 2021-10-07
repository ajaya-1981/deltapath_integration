import React, { Fragment, useState } from 'react';
import KeyPadComponent from '../call/KeyPadComponent';
import InputComponent from '../call/InputComponent';
import ButtonComponent from '../call/ButtonComponent';
import { useHistory } from 'react-router-dom';
import CallAdapter from '../../Adapater/CallAdapter';

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
		//deltapath = CallAdapter({ type: 'DeltaPath' });
		//console.log(deltapath);
		// window.parent.document.getElementById('input_ajaya').value = 'ajaya';
		send();
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

const send = () => {
	// e.preventDefault();
	if (window && window.parent) {
		console.log('we have message sending here', window.parent);
		window.parent.postMessage('try', 'http://localhost:3006');
	}
};
