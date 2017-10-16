import * as React from 'react';
import './App.css';
import Login from "./pages/login/login";
import Body from "./pages/body/body"

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

export default class App extends React.Component<{}, {}> {
	render() {
		return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Login}></Route>
					<Route path="/login" component={Login}/>
					<Route path="/body" component={Body}></Route>
			</Switch>
			</Router>
		</div>
		);
	}
}
