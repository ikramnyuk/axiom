import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './style.scss';

export default class DashboardHeader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mobile: false
		};
	}

	toggleMobile(status){
		this.setState({mobile: status});
	}

	render () {
		return (
			<div>
				<nav className="main-header dashboard">
					<div className="main-header-wrap dashboard-container">
						<div className="menu">
							<Link to="/dashboard" className="logo-link">
								<img src="./assets/img/logo.svg" alt=""/>
							</Link>

							<Link to="/dashboard/residential">RESIDENTIAL</Link>
							<Link to="/dashboard/data-center/ips">DATA CENTER</Link>
							<Link to="/dashboard/servers">SERVERS</Link>
							<Link to="/dashboard/purchase">PURCHASE</Link>
						</div>

						<div className="user-right">
							<div className="notifications">
								<img src="./assets/img/notification.svg" alt="avatar"/>
							</div>

							<div className="settings">
								<img src="./assets/img/settings.svg" alt="avatar"/>
							</div>

							<div className="user-avatar">
								<img src="./assets/img/big-avatar.svg" alt="avatar"/>
								<div className="avatar-menu">
									<img src="./assets/img/arrow-down.svg" alt="arrow"/>

									<div className="logout">Logout</div>
								</div>
							</div>
						</div>

						<div className="menu-btn" onClick={() => {this.toggleMobile(true)}}>
							<img src="./assets/img/menu-btn.svg" alt=""/>
						</div>
					</div>
				</nav>

				<div className="mobile-nav-wrap" onClick={() => {this.toggleMobile(false)}}>
					<div className={ this.state.mobile ? "active mobile-overlay" : "mobile-overlay"}></div>
					<div className={ this.state.mobile ? "active mobile-nav" : "mobile-nav"}>
						<Link to="home" className="logo-link">
							<img src="./assets/img/mobile-logo.svg" alt=""/>
						</Link>

						<div className="menu">
							<Link to="/dashboard">My Plans</Link>
							<Link to="/dashboard/residential">Private Residentials</Link>
							<Link to="/dashboard/data-center/ips">ISP Data Center</Link>
							<Link to="/dashboard/data-center/premium">Premium Data Center</Link>
							<Link to="/dashboard/servers">Bare Metal Servers</Link>
							<Link to="/dashboard/purchase">Purchase</Link>
						</div>

						<div className="menu"><Link>Logout</Link></div>
						
					</div>
				</div>
			</div>
		)
	}
}