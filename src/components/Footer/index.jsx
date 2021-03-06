import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './style.scss';

export default class Header extends Component {

	constructor(props){
		super(props);

		this.state = {
			
		}
	}

	render () {
		return (
			<footer className="main-footer">
				<div className="footer-wrap main-container">
					<div className="footer-col">
						<div className="logo-col">
							<div className="logo">
								<img src="./assets/img/logo.svg" alt=""/>
								<div className="subtitle">Technology built on excellence.</div>
							</div>

							<div className="copyright">Copyright Axiom Technologies LLC © 2020</div>
						</div>
					</div>
					<div className="footer-col">
						<div className="menu">
							<div className="label">Menu</div>

							{this.props.isHome ? <div className="menu-container">
								<div className="menu-col">
									<Link to="home#about">About</Link>
									<Link to="home#features">Features</Link>
									<Link to="home#products">Products</Link>
								</div>
								<div className="menu-col">
									<Link to="home#sitelist">Sitelist</Link>
									<Link to="home#faq">FAQ</Link>
									<Link to="home#contact">Contact</Link>
								</div>
								<div className="menu-col">
									<Link to="/dashboard">Dashboard</Link>
									<Link to="/privacy">Privacy Policy</Link>
									<Link to="/refund">Refund Policy</Link>
								</div>
							</div> : <div className="menu-container">
								<div className="menu-col">
									<Link to="/#about">About</Link>
									<Link to="/#features">Features</Link>
									<Link to="/#products">Products</Link>
								</div>
								<div className="menu-col">
									<Link to="/#sitelist">Sitelist</Link>
									<Link to="/#faq">FAQ</Link>
									<Link to="/#contact">Contact</Link>
								</div>
								<div className="menu-col">
									<Link to="/dashboard">Dashboard</Link>
									<Link to="/privacy">Privacy Policy</Link>
									<Link to="/refund">Refund Policy</Link>
								</div>
							</div>}
						</div>
					</div>
					<div className="footer-col">
						<div className="social">
							<div className="links">
								<div className="label">LET'S CONNECT!</div>

								<a href="https://twitter.com/AxiomTechIO" target="blank"><img src="./assets/img/twiter.svg" alt=""/></a>
								<a href="https://www.instagram.com/AxiomTechIO/" target="blank"><img src="./assets/img/instagram.svg" alt=""/></a>
								<a href="http://discord.gg/FzkZMAD" target="blank"><img src="./assets/img/discord.svg" alt=""/></a>
								<a href="https://www.youtube.com/" target="blank"><img src="./assets/img/youtube.svg" alt=""/></a>
								<a href="https://www.linkedin.com/company/axiomtechio" target="blank"><img src="./assets/img/linkedin.svg" alt=""/></a>
							</div>

							<a href="mailto:support@axiomtechnologies.io" className="support">support@axiomtechnologies.io</a>
						</div>
					</div>
				</div>

				<div className="mobile-copyright">Copyright Axiom Technologies LLC © 2020</div>
			</footer>
		)
	}
}