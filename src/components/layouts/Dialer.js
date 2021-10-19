import React, { Fragment, useEffect, useState, useRef } from 'react';
import KeyPadComponent from '../call/KeyPadComponent';
import InputComponent from '../call/InputComponent';
import ButtonComponent from '../call/ButtonComponent';
import { useHistory } from 'react-router-dom';
import CallAdapter from '../../Adapater/CallAdapter';

//import '../../styles/dialer.scss';
let deltapath;
const Dialer = () => {
	const [result, setResult] = useState('');
	// const [showHistory, setShowHistory] = useState(false);
	const history = useHistory();
	useEffect(() => {
		deltapath = CallAdapter({ type: 'DeltaPath' });
	}, []);
	const inputReference = useRef(null);

	const sendDigit = (val) => {
		setResult(result + val);
		inputReference.current?.focus();
	};
	const deleteFromLast = (val) => {
		setResult(val);
	};
	const onType = (val) => {
		setResult(result + val);
	};
	const startCall = () => {
		console.log('Call');
		if (result) {
			send();
			history.push('/Connecting');
			callDeltapath();
		}
	};
	const callDeltapath = async () => {
		try {
			let response;
			let numberToBeDialled = result;

			response = await deltapath.makeCall(numberToBeDialled);
			if (!response.ok) {
				console.log('call not ok');
			} else {
				console.log('call ok');
			}
		} finally {
			// await deltapath.disconnect();
			// console.log('bye');
		}
	};
	const send = () => {
		// e.preventDefault();
		if (window && window.parent) {
			// console.log('we have message sending here', window.parent);
			window.parent.postMessage(
				{ connectedState: 'Connecting' },
				'http://localhost:3006'
			);
		}
	};
	// const onClick2 = () => {
	// 	setShowHistory(true);
	// 	history.push('/history');
	// 	console.log('nnnnns');
	// };

	return (
		<Fragment>
			<div className='row dialler-window'>
				<div className='container'>
					<InputComponent
						keyPressed={result}
						deleteFromLast={deleteFromLast}
						onType={onType}
						inputRef={inputReference}
					></InputComponent>
					<KeyPadComponent onClick={sendDigit}></KeyPadComponent>
					<div className='btn-row'>
						<ButtonComponent
							cssClass='call'
							icon='fa fa-phone icon'
							onClick={startCall}
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
