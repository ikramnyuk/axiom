import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom"

import Header from '../../components/Header';
import Home from './Home';
import Privacy from './Privacy';
import Refund from './Refund';

class Landing extends Component {
	render() {
		const { history } = this.props

		return (
			<div>
                <Header history={history}/>
                
                <div className="main-wrap">
                    <Switch>
                        <Route history={history} path='/' component={Home} />
                        <Route history={history} path='/privacy' component={Privacy} />
                        <Route history={history} path='/refund' component={Refund} />
                    </Switch>
                </div>
            </div>
		);
	}
}

export default withRouter(Landing)
