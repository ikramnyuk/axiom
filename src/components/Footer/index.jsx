import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.scss';

export default class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			privacyPage: false
		};
	}

	componentDidMount(){
		console.log(this.props.history.location.pathname);
		if(this.props.history.location.pathname === '/privacy'){
			this.setState({privacyPage: true});
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

							{!this.state.privacyPage ? <div className="menu-container">
								<div className="menu-col">
									<a href="#about">About</a>
									<a href="#features">Features</a>
									<a href="#products">Products</a>
								</div>
								<div className="menu-col">
									<a href="#sitelist">Sitelist</a>
									<a href="#faq">FAQ</a>
									<a href="#contact">Contact</a>
								</div>
								<div className="menu-col">
									<Link to="home">Dashboard</Link>
									<a href="/privacy">Privacy Policy</a>
									<Link to="home">Refund Policy</Link>
								</div>
							</div> : ''}

							{this.state.privacyPage ? <div className="menu-container">
								<div className="menu-col">
									<a href="/home?target=aboutabout">About</a>
									<a href="/home?target=features">Features</a>
									<a href="/home?target=products">Products</a>
								</div>
								<div className="menu-col">
									<a href="/home?target=sitelist">Sitelist</a>
									<a href="/home?target=faq">FAQ</a>
									<a href="/home?target=contact">Contact</a>
								</div>
								<div className="menu-col">
									<Link to="home">Dashboard</Link>
									<Link to="/privacy">Privacy Policy</Link>
									<Link to="home">Refund Policy</Link>
								</div>
							</div> : ''}
						</div>
					</div>
					<div className="footer-col">
						<div className="social">
							<div className="links">
								<div className="label">LET'S CONNECT!</div>

								<a href="https://www.google.com/"><img src="./assets/img/twiter.svg" alt=""/></a>
								<a href="https://www.google.com/"><img src="./assets/img/instagram.svg" alt=""/></a>
								<a href="https://www.google.com/"><img src="./assets/img/discord.svg" alt=""/></a>
								<a href="https://www.google.com/"><img src="./assets/img/youtube.svg" alt=""/></a>
								<a href="https://www.google.com/"><img src="./assets/img/linkedin.svg" alt=""/></a>
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