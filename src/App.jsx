import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom"

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Privacy from './views/Privacy';

class App extends Component {
	render() {
		const { history } = this.props

		return (
			<div className="App">
				<Header/>
				
				<div className="main-wrap">
					<Switch>
						<Route history={history} path='/home' component={Home} />
						<Route history={history} path='/privacy' component={Privacy} />
						<Redirect from='/' to='/home'/>
					</Switch>
				</div>

				<Footer history={history}/>
			</div>
		);
	}
}

export default withRouter(App)
