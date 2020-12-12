import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom"

import Privacy from './views/Landing/Privacy';
import Refund from './views/Landing/Refund';
import Landing from './views/Landing';
import Dashboard from './views/Dashboard';

class App extends Component {
	render() {
		const { history } = this.props

		return (
			<div className="App">
				<Switch>
					<Route history={history} path='/home' component={Landing} />
					<Route history={history} path='/privacy' component={Privacy} />
					<Route history={history} path='/refund' component={Refund} />
					<Route history={history} path='/dashboard' component={Dashboard} />
					<Redirect to='/home'/>
				</Switch>
			</div>
		);
	}
}

export default withRouter(App)
