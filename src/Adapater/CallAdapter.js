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
		'junction.deltapath.com',
		window.agentId,
		'58701343',
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
