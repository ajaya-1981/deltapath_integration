import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.addEventListener('message', event => {
    // IMPORTANT: check the origin of the data! 
    if (event.origin === 'http://localhost:3006') { 
        // The data was sent from your site.
        // Data sent with postMessage is stored in event.data:
        console.log('Data from Agent Console : ' + JSON.stringify(event.data)); 
		if(event.data) {

		}
    } else {
        // The data was NOT sent from your site! 
        // Be careful! Do not use it. This else branch is
        // here just for clarity, you usually shouldn't need it.
		console.log('Data from any other site is not acceptable...');
        return; 
    } 
}); 


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
