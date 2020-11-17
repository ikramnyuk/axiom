import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.scss';

export default class Header extends Component {
	render () {
		return (
			<nav className="main-header">
				<div className="main-header-wrap main-container">
					<div className="menu">
						<Link to="home">
							<img src="./assets/img/logo.svg" alt=""/>
						</Link>

						<Link to="home">ABOUT</Link>
						<Link to="home">FEATURES</Link>
						<Link to="home">PRODUCTS</Link>
						<Link to="home">SITELIST</Link>
						<Link to="home">FAQ</Link>
						<Link to="home">CONTACT</Link>
					</div>
					
					<div className="main-btn">Dashboard</div>
				</div>
			</nav>
		)
	}
}