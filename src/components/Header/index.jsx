import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './style.scss';

export default class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mobile: false,
			init: true
		};
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({init: false});
		}, 5000);
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
				
				<nav className="main-header">
					<div className="main-header-wrap main-container">
						<div className="menu">
							<Link to="home" className="logo-link">
								<img src="./assets/img/logo.svg" alt=""/>
							</Link>

							<Link to="home#about">ABOUT</Link>
							<Link to="home#features">FEATURES</Link>
							<Link to="home#products">PRODUCTS</Link>
							<Link to="home#sitelist">SITELIST</Link>
							<Link to="home#faq">FAQ</Link>
							<Link to="home#contact">CONTACT</Link>
						</div>

						<div className="main-btn"><Link to="/dashboard">Dashboard</Link></div>

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
							<Link to="home#about">ABOUT</Link>
							<Link to="home#features">FEATURES</Link>
							<Link to="home#products">PRODUCTS</Link>
							<Link to="home#sitelist">SITELIST</Link>
							<Link to="home#faq">FAQ</Link>
							<Link to="home#contact">CONTACT</Link>
						</div>

						<div className="menu"><Link to="/dashboard">Dashboard</Link></div>
					</div>
				</div>
			</div>
		)
	}
}