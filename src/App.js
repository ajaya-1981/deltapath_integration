import React from 'react';
// import Navbar from './components/layouts/Navbar';
import Dialer from './components/layouts/Dialer';
import Incoming from './components/layouts/Incoming';
import Connecting from './components/layouts/Connecting';
import History from './components/layouts/History';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//redux
// import { Provider } from 'react-redux';
// import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from '../src/util/setAuthToken';
import './App.css';
import './dialer.scss';

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

const App = () => {
	// useEffect(() => {
	//   store.dispatch(loadUser());
	// }, []);
	// const [text, setText] = useState('');
	return (
		<Router>
			<div className='body'>
				{/* <input
					type='text'
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder='Add Task'
				></input> */}
				<Switch>
					<Route exact path='/' component={Dialer}></Route>
					<Route exact path='/Incoming' component={Incoming}></Route>
					<Route exact path='/Connecting' component={Connecting}></Route>
					<Route exact path='/history' component={History}></Route>
				</Switch>
			</div>
		</Router>

		// <Provider store={store}>
		//   <Router>
		//     <Fragment>
		//       <Navbar />
		//       <Route exact path="/" component={Landing} />
		//       <section className="container">
		//         <Alert> </Alert>
		//         <Switch>
		//           <Route exact path="/register" component={Register}></Route>
		//           <Route exact path="/login" component={Login}></Route>
		//           <PrivateRoute
		//             exact
		//             path="/dashboard"
		//             component={Dashboard}
		//           ></PrivateRoute>
		//           <PrivateRoute
		//             exact
		//             path="/create-profile"
		//             component={CreateProfile}
		//           ></PrivateRoute>
		//           <PrivateRoute
		//             exact
		//             path="/edit-profile"
		//             component={EditProfile}
		//           ></PrivateRoute>
		//           <PrivateRoute
		//             exact
		//             path="/add-experience"
		//             component={AddExperience}
		//           ></PrivateRoute>
		//           <PrivateRoute
		//             exact
		//             path="/add-education"
		//             component={AddEducation}
		//           ></PrivateRoute>
		//         </Switch>
		//       </section>
		//     </Fragment>
		//   </Router>
		// </Provider>
	);
};

export default App;
