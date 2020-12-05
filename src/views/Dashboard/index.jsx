import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import DashboardHeader from '../../components/DashboardHeader';
import Home from './Home';
import ISP from './ISP';
import Purchase from './Purchase';
import Residential from './Residential';
import Servers from './Servers';
import PaymentStatus from './PaymentStatus';

class Landing extends Component {
	render() {
		const { history } = this.props

		return (
			<div className="dashboard">
                <DashboardHeader history={history}/>
                
                <div className="main-wrap">
                    <Switch>
                        <Route history={history} path='/dashboard' component={Home} exact/>
                        <Route history={history} path='/dashboard/data-center' component={ISP} />
                        <Route history={history} path='/dashboard/purchase' component={Purchase} />
                        <Route history={history} path='/dashboard/residential' component={Residential} />
                        <Route history={history} path='/dashboard/servers' component={Servers} />
                        <Route history={history} path='/dashboard/peyment-status' component={PaymentStatus} />
                    </Switch>
                </div>
            </div>
		);
	}
}

export default withRouter(Landing)
