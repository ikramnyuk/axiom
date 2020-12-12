import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './style.scss';

export default class DashboardHeader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mobile: false,
			selectOpened: false,
			init: true
		};
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({init: false});
		}, 4000);

		let self = this,
			element = document.querySelector('#select8'),
			element11 = document.querySelector('#select81'),
			element12 = document.querySelector('#select82'),
			element13 = document.querySelector('#select83');

		const outsideClickListener = event => {
			event.stopPropagation();

			if(event.target != element && event.target != element11 && event.target != element12 && event.target != element13) {
				self.setState({selectOpened: false})
			}
		}
	
		document.addEventListener('click', outsideClickListener)
	}

	toggleMobile(status){
		this.setState({mobile: status});
	}

	render () {
		return (
			<div>
				{this.state.init ? <div className="logo-animation-wrap">
					<div className="animate">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 493.23 77.79"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M314.79,0c-31.91,0-53.24,15.55-53.24,38.91s21.33,38.88,53.24,38.88S368.1,62.25,368.1,38.91,346.76,0,314.79,0Zm0,56.29c-14.3,0-23.9-7-23.9-17.38s9.6-17.41,23.9-17.41,24,7,24,17.41S329.13,56.29,314.79,56.29Z"/><polygon class="cls-1" points="220.87 75.25 185.51 75.25 166.13 53.78 146.77 75.25 111.9 75.25 113.67 73.34 146.97 37.36 112.15 2.54 147.22 2.54 165.85 21.39 184.98 2.54 220.67 2.54 219.46 3.73 218.59 4.57 185.04 37.05 219.06 73.34 219.46 73.76 220.87 75.25"/><polygon class="cls-1" points="257.18 2.54 257.18 75.25 225.24 75.25 225.24 73.76 225.24 3.73 225.24 2.54 257.18 2.54"/><polygon class="cls-1" points="111.9 75.25 77.32 75.25 59.66 40.49 57.6 36.51 37.92 75.25 0 75.25 37.03 2.51 74.92 2.51 74.31 3.7 57.63 36.48 92.19 36.48 111.9 75.25"/><polygon class="cls-1" points="493.23 2.54 493.23 75.25 466.82 75.25 466.82 36.15 447.06 75.25 419.45 75.25 398.87 36.07 398.87 75.25 372.46 75.25 372.46 2.54 408.3 2.54 432.79 50.54 457 2.54 493.23 2.54"/></g></g></svg>
					</div>
				</div> : ''}

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

							<div id="select8" className={this.state.selectOpened ? 'user-avatar open' : 'user-avatar'} onClick={() => {this.setState({selectOpened: true})}}>
								<img id="select81" src="./assets/img/big-avatar.svg" alt="avatar"/>
								<div id="select82" className="avatar-menu">
									<img id="select83" src="./assets/img/arrow-down.svg" alt="arrow"/>
								</div>

								<div className={this.state.selectOpened ? "opened select-wrap" : "select-wrap"}>
									<Link to="/dashboard">
										My plans
									</Link>
									<Link to="/home">
										Logout
									</Link>
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

						<div className="menu"><Link to="/">Logout</Link></div>
						
					</div>
				</div>
			</div>
		)
	}
}