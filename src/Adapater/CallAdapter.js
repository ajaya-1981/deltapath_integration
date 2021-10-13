import React from 'react';

const CallAdapter = (props) => {
	var dialerAdapter;
	switch (props.type) {
		case 'DeltaPath':
			dialerAdapter = DeltapathInit(dialerAdapter);
			return dialerAdapter;
		default:
			return <div> Reload ...</div>;
	}
};

export default CallAdapter;
function DeltapathInit(deltapath) {
	deltapath = new window.Deltapath(
		window.agentInfo.hostname,
		window.agentInfo.agentId,
		window.agentInfo.password,
		window.agentInfo.protocol,
		window.agentInfo.actionTimeout,
		window.agentInfo.reconnectInterval,
		window.agentInfo.authmode
	);
	console.log('Init done');
	deltapath.onInitialize = (e) => {
		console.log('onInitialize');
		console.log(e);
	};
	deltapath.onCallUpdate = (e) => { 
		//if user accept or reject call, then accordingly we have to show outgoing screen(end call, pause)
		//if user get incoming call, accordingly we have to show incoming screen
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

