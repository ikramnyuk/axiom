import React, { Component } from 'react'

import Carousel from 'react-bootstrap/Carousel' 

import './style.scss';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stateSelected: 0,
			faqIndex: '',
			showCookie: true,
			plans: [
				{
					subPlans: [
						{
							memoty: '2GB',
							price: '50',
							priceDecimal: '.00',
							memoryPrice: '$25.00 per gigabyte.'
						},
						{
							memoty: '5GB',
							price: '112',
							priceDecimal: '.50',
							memoryPrice: '$22.50 per gigabyte.'
						},
						{
							memoty: '10GB',
							price: '200',
							priceDecimal: '.00',
							memoryPrice: '$20.00 per gigabyte.'
						},
					],
					benefits: ['T1 Residential Network', 'Real Time Data Accounting', 'Site-Specific Filters', 'Optimized Duo-Hop Redundancy Routing', 'User:Pass (IP Auth soon)', '30 Day Activation', '175 Countries', '24M+ End Points', 'Instant Delivery']
				},
				{
					subPlans: [
						{
							memoty: '23GB',
							price: '50',
							priceDecimal: '.00',
							memoryPrice: '$25.00 per gigabyte.'
						},
						{
							memoty: '5GB',
							price: '112',
							priceDecimal: '.50',
							memoryPrice: '$22.50 per gigabyte.'
						},
						{
							memoty: '1GB',
							price: '200',
							priceDecimal: '.00',
							memoryPrice: '$20.00 per gigabyte.'
						},
					],
					benefits: ['T1 Residential Network', 'Real Time Data Accounting', 'Site-Specific Filters', 'Optimized Duo-Hop Redundancy Routing', 'User:Pass (IP Auth soon)', '30 Day Activation', '175 Countries', '24M+ End Points', 'Instant Delivery']
				},
				{
					subPlans: [
						{
							memoty: '2GB',
							price: '50',
							priceDecimal: '.00',
							memoryPrice: '$25.00 per gigabyte.'
						},
						{
							memoty: '52GB',
							price: '112',
							priceDecimal: '.50',
							memoryPrice: '$22.50 per gigabyte.'
						},
						{
							memoty: '10GB',
							price: '200',
							priceDecimal: '.00',
							memoryPrice: '$20.00 per gigabyte.'
						},
					],
					benefits: ['T1 Residential Network', 'Real Time Data Accounting', 'Site-Specific Filters', 'Optimized Duo-Hop Redundancy Routing', 'User:Pass (IP Auth soon)', '30 Day Activation', '175 Countries', '24M+ End Points', 'Instant Delivery']
				},
				{
					subPlans: [
						{
							memoty: '21GB',
							price: '50',
							priceDecimal: '.00',
							memoryPrice: '$25.00 per gigabyte.'
						},
						{
							memoty: '53GB',
							price: '112',
							priceDecimal: '.50',
							memoryPrice: '$22.50 per gigabyte.'
						},
						{
							memoty: '10GB',
							price: '200',
							priceDecimal: '.00',
							memoryPrice: '$20.00 per gigabyte.'
						},
					],
					benefits: ['T1 Residential Network', 'Real Time Data Accounting', 'Site-Specific Filters', 'Optimized Duo-Hop Redundancy Routing', 'User:Pass (IP Auth soon)', '30 Day Activation', '175 Countries', '24M+ End Points', 'Instant Delivery']
				}
			]
		};
	}

	setSelectedPlan(index){
		this.setState({stateSelected: index});
	}

	setOpenFaq(index){
		if(this.state.faqIndex !== index){
			this.setState({faqIndex: index});
		}else{
			this.setState({faqIndex: ''});
		}
	}

	hideCookie(){
		this.setState({showCookie: false});
	}

	render () {
		return (
			<div className="page">
                <div className="page-section intro-section">
					<div className="home-intro main-container">
						<div className="left">
							<div className="logo">
								<img src="./assets/img/logo.svg" alt=""/>
							</div>

							<div className="subtitle">Technology built on excellence.</div>
							<div className="description">Axiom reigns supreme when compared to our competitors. <br/> We put in the time and have the products to prove it.</div>
						
							<div className="main-btn">LEARN MORE</div>
						</div>

						<div className="right">
							<img src="./assets/img/server.svg" alt=""/>
						</div>
					</div>
				</div>

				<div className="page-section">
					<div className="section-header main-container">
						<div className="label">Welcome to Axiom's world.</div>
						<div className="description">Axiom is serving up proxies that make the internet accessible while offering security, speed, and that something extra: Quality. <br/> It is what sets us apart, drives us ahead, and keeps us creating better ways of advancing our technology.</div>
					</div>

					<div className="slider">
						<Carousel>
							<Carousel.Item>
								<div className="slide-part-wrap">
									<div className="slide-part">
										<img alt="" src="./assets/img/slide-1.svg" />
									</div>

									<div className="slide-part">
										<img alt="" src="./assets/img/slide-2.svg" />
									</div>

									<div className="slide-part">
										<img alt="" src="./assets/img/slide-3.svg" />
									</div>

									<div className="slide-part">
										<img alt="" src="./assets/img/slide-4.svg" />
									</div>
								</div>
							</Carousel.Item>

							<Carousel.Item>
								<div className="slide-part-wrap">
									<div className="slide-part">
										<img alt="" src="./assets/img/slide-1.svg" />
									</div>

									<div className="slide-part">
										<img alt="" src="./assets/img/slide-2.svg" />
									</div>

									<div className="slide-part">
										<img alt="" src="./assets/img/slide-3.svg" />
									</div>

									<div className="slide-part">
										<img alt="" src="./assets/img/slide-4.svg" />
									</div>
								</div>
							</Carousel.Item>

							<Carousel.Item>
								<div className="slide-part-wrap">
									<div className="slide-part">
										<img alt="" src="./assets/img/slide-1.svg" />
									</div>

									<div className="slide-part">
										<img alt="" src="./assets/img/slide-2.svg" />
									</div>

									<div className="slide-part">
										<img alt="" src="./assets/img/slide-3.svg" />
									</div>

									<div className="slide-part">
										<img alt="" src="./assets/img/slide-4.svg" />
									</div>
								</div>
							</Carousel.Item>

							<Carousel.Item>
								<div className="slide-part-wrap">
									<div className="slide-part">
										<img alt="" src="./assets/img/slide-1.svg" />
									</div>

									<div className="slide-part">
										<img alt="" src="./assets/img/slide-2.svg" />
									</div>

									<div className="slide-part">
										<img alt="" src="./assets/img/slide-3.svg" />
									</div>

									<div className="slide-part">
										<img alt="" src="./assets/img/slide-4.svg" />
									</div>
								</div>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>

				<div className="page-section main-container">
					<div className="section-header ">
						<div className="label">What we offer.</div>
						<div className="description">We pride ourselves on having the best product possible so no corners are cut. <br /> With Axiom, you can trust that you are getting the best.</div>
					</div>

					<div className="offer">
						<div className="offer-row">
							<div className="item">
								<div className="icon">
									<img src="./assets/img/offer-1.svg" alt=""/>
								</div>

								<div className="offer-info">
									<div className="name">CONFIGURED FOR SPEED</div>
									<div className="description">Due to our perfectly configured servers, we’re 
	able give you the fastest connections to any 
	desired website, with the lowest pings.</div>
								</div>
							</div>

							<div className="item">
								<div className="icon">
									<img src="./assets/img/offer-2.svg" alt=""/>
								</div>

								<div className="offer-info">
									<div className="name">UNHINDERED CONSISTENCY</div>
									<div className="description">Every proxy and server is hosted in tier-1 data
	centers, boasting an astonishing network capacity
	of 50GBPS, assuring no proxy is hindered.</div>
								</div>
							</div>
						</div>

						<div className="offer-row">
							<div className="item">
								<div className="icon">
									<img src="./assets/img/offer-3.svg" alt=""/>
								</div>

								<div className="offer-info">
									<div className="name">SERVER STRATEGY</div>
									<div className="description">The locations of our servers are deliberate, 
	designed to keep ping to popular sneaker
	sites minimal.</div>
								</div>
							</div>

							<div className="item">
								<div className="icon">
									<img src="./assets/img/offer-4.svg" alt=""/>
								</div>

								<div className="offer-info">
									<div className="name">DEDICATED TO SUCCESS</div>
									<div className="description">Our 100% dedicated servers translates to lower 
	ban rates and higher success rates, as compared 
	to our competitors.</div>
								</div>
							</div>
						</div>

						<div className="offer-row">
							<div className="item">
								<div className="icon">
									<img src="./assets/img/offer-5.svg" alt=""/>
								</div>

								<div className="offer-info">
									<div className="name">TOP-TIER QUALITY</div>
									<div className="description">No corners are ever cut—we take pride 
	in our products, and the quality with which
	they’re delivered.</div>
								</div>
							</div>

							<div className="item">
								<div className="icon">
									<img src="./assets/img/offer-6.svg" alt=""/>
								</div>

								<div className="offer-info">
									<div className="name">STREAMLINED EXCELLENCE</div>
									<div className="description">The Axiom client dashboard has visually 
	satisfying aesthetics, which are underscored by 
	functionality and intelligence.</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="page-section main-container">
					<div className="section-header centered">
						<div className="label">The best selection available.</div>
						<div className="description">Get to test the most successful proxy experience in the scene, thanks to our revolutionary pools. <br/> Insane speeds, unbanned on almost all sites, and instant delivery. Enjoy!</div>
					</div>

					<div className="plans">
						<div className="plan-header">
							<div onClick={() => {this.setSelectedPlan(0)}} className={this.state.stateSelected === 0 ? "active main-btn" : "main-btn"}>PRIVATE RESIDENTIALS</div>
							<div onClick={() => {this.setSelectedPlan(1)}} className={this.state.stateSelected === 1 ? "active main-btn" : "main-btn"}>ISP DC PROXIES</div>
							<div onClick={() => {this.setSelectedPlan(2)}} className={this.state.stateSelected === 2 ? "active main-btn" : "main-btn"}>PREMIUM DC PROXIES</div>
							<div onClick={() => {this.setSelectedPlan(3)}} className={this.state.stateSelected === 3 ? "active main-btn" : "main-btn"}>BARE METAL SERVERS</div>
						</div>

						<div className="plan-body">
							{this.state.plans[this.state.stateSelected].subPlans.map((item, index) => 
								<div className="plan" key={index}>
									<div className="memory">{ item.memoty }</div>
									<div className="price">
										<div><span>$</span><span className="main-price">{ item.price }</span><span>{ item.priceDecimal }</span></div>
									</div>

									<div className="main-btn">PURCHASE</div>
									<div className="memory-price">{ item.memoryPrice }</div>
								</div>
							)}
						</div>

						<div className="plan-benefits">
							{this.state.plans[this.state.stateSelected].benefits.map((item, index) => 
								<div className="benefit" key={index}>
									<img src="./assets/img/check.svg" alt=""/>
									<span>{item}</span>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="page-section client-container">
					<div className="section-header centered">
						<div className="label">Recklessly unbanned.</div>
						<div className="description">Axiom helps you become superior than your competition by using site-specific filters. <br /> Approach every release with no fear of getting caught. We've got you covered.</div>
					</div>

					<div className="clients">
						<div><img src="./assets/img/client-1.svg" alt=""/></div>
						<div><img src="./assets/img/client-2.svg" alt=""/></div>
						<div><img src="./assets/img/client-3.svg" alt=""/></div>
						<div><img src="./assets/img/client-4.svg" alt=""/></div>
						<div><img src="./assets/img/client-5.svg" alt=""/></div>
						<div><img src="./assets/img/client-6.svg" alt=""/></div>
						<div><img src="./assets/img/client-7.svg" alt=""/></div>
						<div><img src="./assets/img/client-30.svg" alt=""/></div>
						<div><img src="./assets/img/client-8.svg" alt=""/></div>
						<div><img src="./assets/img/client-9.svg" alt=""/></div>
						<div><img src="./assets/img/client-10.svg" alt=""/></div>
						<div><img src="./assets/img/client-11.svg" alt=""/></div>
						<div><img src="./assets/img/client-12.svg" alt=""/></div>
						<div><img src="./assets/img/client-13.svg" alt=""/></div>
						<div><img src="./assets/img/client-14.svg" alt=""/></div>
						<div><img src="./assets/img/client-15.svg" alt=""/></div>
						<div><img src="./assets/img/client-16.svg" alt=""/></div>
						<div><img src="./assets/img/client-17.svg" alt=""/></div>
						<div><img src="./assets/img/client-18.svg" alt=""/></div>
						<div><img src="./assets/img/client-19.svg" alt=""/></div>
						<div><img src="./assets/img/client-20.svg" alt=""/></div>
						<div><img src="./assets/img/client-21.svg" alt=""/></div>
						<div><img src="./assets/img/client-22.svg" alt=""/></div>
						<div><img src="./assets/img/client-23.svg" alt=""/></div>
						<div><img src="./assets/img/client-24.svg" alt=""/></div>
						<div><img src="./assets/img/client-25.svg" alt=""/></div>
						<div><img src="./assets/img/client-26.svg" alt=""/></div>
						<div><img src="./assets/img/client-27.svg" alt=""/></div>
						<div><img src="./assets/img/client-28.svg" alt=""/></div>
						<div><img src="./assets/img/client-29.svg" alt=""/></div>
					</div>
				</div>
            
				<div className="page-section main-container faq-page">
					<div className="section-header ">
						<div className="label">Frequently asked questions.</div>
						<div className="description">If you are hesitating, do not worry - we are here to explain <br/> everything you might want to know. Let us help!</div>
					</div>
					
					<div className="faq">
						<div className="faq-column">
							<div className={this.state.faqIndex === 0 ? "item open" : "item"}>
								<div className="label" onClick={() => {this.setOpenFaq(0)}}>
									<span>What are proxies and why do I need them?</span>

									<div className="more-btn">
										{this.state.faqIndex === 0 ? <img src="./assets/img/arrow-top.svg" alt=""/> : <img src="./assets/img/arrow-bottom.svg" alt=""/> }
									</div>
								</div>

								<div className="content">
									Please log in to your proxy DASHBOARD and enter the IP you would like to authorize into the field labeled “Authorized IP.” If you’re unsure of your IP number, you can find your local IPv4 by Google-searching the question, “What is my IPv4?”.
								</div>
							</div>

							<div className={this.state.faqIndex === 1 ? "item open" : "item"}>
								<div className="label" onClick={() => {this.setOpenFaq(1)}}>
									<span>What is the delivery time on my new proxies?</span>

									<div className="more-btn">
										{this.state.faqIndex === 1 ? <img src="./assets/img/arrow-top.svg" alt=""/> : <img src="./assets/img/arrow-bottom.svg" alt=""/> }
									</div>
								</div>

								<div className="content">
									Please log in to your proxy DASHBOARD and enter the IP you would like to authorize into the field labeled “Authorized IP.” If you’re unsure of your IP number, you can find your local IPv4 by Google-searching the question, “What is my IPv4?”.
								</div>
							</div>

							<div className={this.state.faqIndex === 2 ? "item open" : "item"}>
								<div className="label" onClick={() => {this.setOpenFaq(2)}}>
									<span>What type of authorization methods do your proxies support?</span>

									<div className="more-btn">
										{this.state.faqIndex === 2 ? <img src="./assets/img/arrow-top.svg" alt=""/> : <img src="./assets/img/arrow-bottom.svg" alt=""/> }
									</div>
								</div>

								<div className="content">
									Please log in to your proxy DASHBOARD and enter the IP you would like to authorize into the field labeled “Authorized IP.” If you’re unsure of your IP number, you can find your local IPv4 by Google-searching the question, “What is my IPv4?”.
								</div>
							</div>
						</div>

						<div className="faq-column">
							<div className={this.state.faqIndex === 3 ? "item open" : "item"}>
								<div className="label" onClick={() => {this.setOpenFaq(3)}}>
									<span>How do I authorize my IP?</span>

									<div className="more-btn">
										{this.state.faqIndex === 3 ? <img src="./assets/img/arrow-top.svg" alt=""/> : <img src="./assets/img/arrow-bottom.svg" alt=""/> }
									</div>
								</div>

								<div className="content">
									Please log in to your proxy DASHBOARD and enter the IP you would like to authorize into the field labeled “Authorized IP.” If you’re unsure of your IP number, you can find your local IPv4 by Google-searching the question, “What is my IPv4?”.
								</div>
							</div>

							<div className={this.state.faqIndex === 4 ? "item open" : "item"}>
								<div className="label" onClick={() => {this.setOpenFaq(4)}}>
									<span>Can I use my ISP DCs 24/7?</span>

									<div className="more-btn">
										{this.state.faqIndex === 4 ? <img src="./assets/img/arrow-top.svg" alt=""/> : <img src="./assets/img/arrow-bottom.svg" alt=""/> }
									</div>
								</div>

								<div className="content">
									Please log in to your proxy DASHBOARD and enter the IP you would like to authorize into the field labeled “Authorized IP.” If you’re unsure of your IP number, you can find your local IPv4 by Google-searching the question, “What is my IPv4?”.
								</div>
							</div>

							<div className={this.state.faqIndex === 5 ? "item open" : "item"}>
								<div className="label" onClick={() => {this.setOpenFaq(5)}}>
									<span>What is your refund policy?</span>

									<div className="more-btn">
										{this.state.faqIndex === 5 ? <img src="./assets/img/arrow-top.svg" alt=""/> : <img src="./assets/img/arrow-bottom.svg" alt=""/> }
									</div>
								</div>

								<div className="content">
									Please log in to your proxy DASHBOARD and enter the IP you would like to authorize into the field labeled “Authorized IP.” If you’re unsure of your IP number, you can find your local IPv4 by Google-searching the question, “What is my IPv4?”.
								</div>
							</div>
						</div>
					</div>
				</div>
			
				<div className="page-section main-container">
					<div className="section-header ">
						<div className="label">Have more questions?</div>
						<div className="description">Do you still have some unanswered questions? Feel free to reach out to us.</div>
					</div>

					<div className="contact">
						<div className="left">
							<div className="input-row">
								<input type="text" placeholder="Full Name" />
								<input type="text" placeholder="Email" />
							</div>

							<textarea placeholder="Enter your message here…" ></textarea>

							<div className="main-btn"><span>SEND EMAIL</span></div>
						</div>

						<div className="right">
							<div className="feedback">
								<div className="top">
									<div className="label">Give us a follow!</div>
									<div className="description">Follow our social media for staying up to date and keeping track of our success!</div>
								</div>

								<div className="social">
									<a href="https://www.google.com/"><img src="./assets/img/twiter.svg" alt=""/></a>
									<a href="https://www.google.com/"><img src="./assets/img/instagram.svg" alt=""/></a>
									<a href="https://www.google.com/"><img src="./assets/img/discord.svg" alt=""/></a>
									<a href="https://www.google.com/"><img src="./assets/img/youtube.svg" alt=""/></a>
									<a href="https://www.google.com/"><img src="./assets/img/linkedin.svg" alt=""/></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			
				{this.state.showCookie ? <div className="cookie-modal">
					<div className="label">Cookies & Privacy Policy.</div>
					<div className="description">By using this website, you automatically accept that we use cookies.</div>

					<div className="btn-wrap">
						<div className="main-btn">MORE INFO</div>
						<div className="main-btn" onClick={() => {this.hideCookie()}}>ACCEPT</div>
					</div>
				</div> : ''}
			</div>
		)
	}
}