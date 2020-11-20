import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './style.scss';

export default class Header extends Component {

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

						<div className="main-btn">Dashboard</div>

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

						<div className="main-btn">Dashboard</div>
					</div>
				</div>
			</div>
		)
	}
}