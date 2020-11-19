import React, { Component } from 'react'
import { Link } from "react-router-dom";
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

							<a href="#about">ABOUT</a>
							<a href="#features">FEATURES</a>
							<a href="#products">PRODUCTS</a>
							<a href="#sitelist">SITELIST</a>
							<a href="#faq">FAQ</a>
							<a href="#contact">CONTACT</a>
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
							<a href="#about">ABOUT</a>
							<a href="#features">FEATURES</a>
							<a href="#products">PRODUCTS</a>
							<a href="#sitelist">SITELIST</a>
							<a href="#faq">FAQ</a>
							<a href="#contact">CONTACT</a>
						</div>

						<div className="main-btn">Dashboard</div>
					</div>
				</div>
			</div>
		)
	}
}