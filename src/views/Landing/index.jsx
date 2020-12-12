import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom"

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Home from './Home';

class Landing extends Component {
	render() {
		const { history } = this.props

		return (
			<div>
                <Header isHome={true} />
                
                <div className="main-wrap">
                    <Home history={history}/>
                </div>

                <Footer isHome={true}/>
            </div>
		);
	}
}

export default withRouter(Landing)
