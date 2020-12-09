import React, { Component } from 'react';

import './style.scss';

export default class Purchase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stateSelected: 0,
			selectOpened: false,
			selected: 'US',
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
							memoryPrice: '$22.50 per gigabyte.',
							sale: '10% off'
						},
						{
							memoty: '10GB',
							price: '200',
							priceDecimal: '.00',
							memoryPrice: '$20.00 per gigabyte.',
							sale: '20% off'
						},
					],
					benefits: ['T1 Residential Network', 'Real Time Data Accounting', 'Site-Specific Filters', 'Optimized Duo-Hop Redundancy Routing', 'User:Pass (IP Auth soon)', '30 Day Activation', '175 Countries', '24M+ End Points', 'Instant Delivery']
				},
				{
					subPlans: [
						{
							memoty: '25 Proxies',
							price: '75',
							priceDecimal: '.00',
							memoryPrice: '$3.00 per proxy.'
						},
						{
							memoty: '50 Proxies',
							price: '135',
							priceDecimal: '.00',
							memoryPrice: '$2.70 per proxy.',
							sale: '10% off'
						},
						{
							memoty: '100 Proxies',
							price: '240',
							priceDecimal: '.00',
							memoryPrice: '$2.40 per proxy.',
							sale: '20% off'
						},
					],
					benefits: ['T1 Residential Network', 'Real Time Data Accounting', 'Site-Specific Filters', 'Optimized Duo-Hop Redundancy Routing', 'User:Pass (IP Auth soon)', '30 Day Activation', '175 Countries', '24M+ End Points', 'Instant Delivery']
				},
				{
					location: 'UNITED STATES',
					subPlans: [
						{
							memoty: '25 Proxies',
							price: '56',
							priceDecimal: '.25',
							memoryPrice: '$2.25 per proxy.'
						},
						{
							memoty: '50 Proxies',
							price: '101',
							priceDecimal: '.25',
							memoryPrice: '$2.02 per proxy.',
							sale: '10% off'
						},
						{
							memoty: '100 Proxies',
							price: '180',
							priceDecimal: '.00',
							memoryPrice: '$1.80 per proxy.',
							sale: '20% off'
						},
					],
					benefits: ['T1 Residential Network', 'Real Time Data Accounting', 'Site-Specific Filters', 'Optimized Duo-Hop Redundancy Routing', 'User:Pass (IP Auth soon)', '30 Day Activation', '175 Countries', '24M+ End Points', 'Instant Delivery']
				},
				{
					subPlans: [
						{
							memoty: '1 Server',
							price: '110',
							priceDecimal: '.00',
							memoryPrice: 'Activated 30 days.'
						}
					],
					benefits: ['T1 Residential Network', 'Real Time Data Accounting', 'Site-Specific Filters', 'Optimized Duo-Hop Redundancy Routing', 'User:Pass (IP Auth soon)', '30 Day Activation', '175 Countries', '24M+ End Points', 'Instant Delivery']
				}
			]
		}
	}

	componentDidMount(){
		let self = this,
			element = document.querySelector('#select'),
			element11 = document.querySelector('#select11');
		
		const outsideClickListener = event => {
			event.stopPropagation();

			if(event.target != element && event.target != element11) {
				self.setState({selectOpened: false})
			}
		}
	
		document.addEventListener('click', outsideClickListener)
	}

	setSelectedPlan(index){
		this.setState({stateSelected: index});
	}

	render () {
		return (
			<div className="page dashboard-container purchase">
                <div className="main-block">
					<div className="label">Product Category</div>
					<div className="sublabel">Select the Product Category you would like to view.</div>

					<div className="caregories">
						<div onClick={() => {this.setSelectedPlan(0)}} className={this.state.stateSelected === 0 ? "active main-btn" : "hover main-btn"}>PRIVATE RESIDENTIALS</div>
						<div onClick={() => {this.setSelectedPlan(1)}} className={this.state.stateSelected === 1 ? "active main-btn" : "hover main-btn"}>ISP DC PROXIES</div>
						<div id="select" onClick={() => {this.setSelectedPlan(2); this.setState({selectOpened: true})}} className={this.state.stateSelected === 2 ? "active main-btn" : "hover main-btn"}>
							<span id="select11">{this.state.selected} PREMIUM DC <br/> PROXIES</span> {this.state.stateSelected === 2 ? <img src="./assets/img/tringle-dark-arrow.svg" alt="tringle"/> : <img src="./assets/img/tringle-arrow.svg" alt="tringle"/>}
							
							<div className={this.state.selectOpened ? "opened select-wrap" : "select-wrap"}>
								<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened: false, selected: 'US'})}}>US PREMIUM DC PROXIES</span>
								<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened: false, selected: 'EU'})}}>EU PREMIUM DC PROXIES</span>
							</div>
						</div>
						<div onClick={() => {this.setSelectedPlan(3)}} className={this.state.stateSelected === 3 ? "active main-btn" : "hover main-btn"}>BARE METAL SERVERS</div>
					</div>
				</div>

				<div className="tarifs">
					{this.state.plans[this.state.stateSelected].subPlans.map((item, index) => 
						<div className="main-block plan" key={index}>
							{this.state.plans[this.state.stateSelected].location ? <div className="location">{this.state.plans[this.state.stateSelected].location}</div> : ''}
							
							<div className="memory">{ item.memoty }</div>
							<div className="price">
								{item.sale ? <div className="sale">{ item.sale }</div> : ''}
								<div className="main-price"><span>$</span><span className="big-price">{ item.price }</span><span>{ item.priceDecimal }</span></div>
							</div>

							<div className="main-btn active">PURCHASE</div>
							<div className="memory-price">{ item.memoryPrice }</div>
						</div>
					)}
					
					<div className="main-block">
						<div className="label">Product Info</div>

						<div className="list">
							<p><img src="./assets/img/done.svg" alt="check"/><span>175 Countries</span></p>
							<p><img src="./assets/img/done.svg" alt="check"/><span>24M+ End Points</span></p>
							<p><img src="./assets/img/done.svg" alt="check"/><span>User:Pass</span></p>
							<p><img src="./assets/img/done.svg" alt="check"/><span>30 Day Activation</span></p>
							<p><img src="./assets/img/done.svg" alt="check"/><span>Instant Delivery</span></p>
						</div>
					</div>
				</div>
				
				<div className="main-block customers">
					<div className="label">
						<span>Supported Sites</span>
						<div className="custom-tooltip">List updated 2 days ago</div>
					</div>
					<div className="sublabel">Here is a list of websites our proxies work on.</div>

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
			</div>
		)
	}
}