import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom"

import Footer from './components/Footer';
import Landing from './views/Landing';
import Dashboard from './views/Dashboard/';

class App extends Component {
	render() {
		const { history } = this.props

		return (
			<div className="App">
				<Switch>
					<Route history={history} path='/home' component={Landing} />
					<Route history={history} path='/dashboard' component={Dashboard} />
					<Redirect to='/home'/>
				</Switch>

				<Footer history={history}/>
			</div>
		);
	}
}

export default withRouter(App)
