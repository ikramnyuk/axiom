import React, { Component } from 'react';

import './style.scss';

export default class Residetial extends Component {

	constructor(props) {
		super(props);
		this.state = {
			qty: 0,
			tooltipTop: {bottom: '-200px', opacity: '0'}
		}
	}
	
	updateInputValue(evt) {
		this.setState({
			qty: evt.target.value
		});
	}

	increase(){
		let qty = this.state.qty,
		formated = parseInt(qty);

		if(formated == 100){
			return;
		}

		formated++;

		this.setState({qty: formated});
	}

	decrease(){
		let qty = this.state.qty,
		formated = parseInt(qty);

		if(formated == 0){
			return;
		}

		formated--;

		this.setState({qty: formated});
	}

	showTooltip(top, index){
		this.setState({ tooltipTop: {bottom: "calc(" + top + " + 9px)", left: (index * 24) + 12 + "px", opacity: 1} })
	}

	hideTooltip(index){
		this.setState({ tooltipTop: this.tooltipTop = {bottom: "-200px", left: (index * 24) + 12 + "px", opacity: 0} })
	}

	render () {
		return (
			<div className="page dashboard-container residental">
				<div className="block-row">
					<div className="left">
						<div className="main-block proxies-container">
							<div className="label">Generate Proxies</div>

							<div className="proxies">
								<div className="select-qty">
									<div className="label">PROXY TYPE</div>

									<div className="select">
										<span>Select between Static or Rotating proxies</span>
										<img src="./assets/img/tringle-arrow.svg" alt="tringle"/>
									</div>
								</div>
								<div className="select-qty">
									<div className="label">CATEGORY / REGION</div>

									<div className="select">
										<span>Select a Category or Region</span>
										<img src="./assets/img/tringle-arrow.svg" alt="tringle"/>
									</div>
								</div>
								<div className="select-qty">
									<div className="label">SUBCATEGORY / COUNTRY</div>

									<div className="select">
										<span>Select a Subcategory or Country</span>
										<img src="./assets/img/tringle-arrow.svg" alt="tringle"/>
									</div>
								</div>

								<div className="select-qty">
									<div className="label">QUANTITY</div>

									<div className="qty-container">
										<div className="qty-input">
											<div onClick={() => {this.decrease()}} className="control"><img src="./assets/img/minus.svg" alt="minus"/></div>
											<input type="text" value={this.state.qty} onChange={evt => this.updateInputValue(evt)}/>
											<div onClick={() => {this.increase()}} className="control"><img src="./assets/img/plus.svg" alt="plus"/></div>
										</div>

										<div className="main-btn active">GENERATE</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>

					<div className="right">
						<div className="main-block">
							<div className="label">Plan Information</div>

							<div className="server-details">
								<div className="custom-row">
									<div className="item">
										<div className="header">PLAN TOKEN</div>
										<div className="body">DbboLCMD</div>
									</div>

									<div className="item">
										<div className="header">CURRENT USAGE</div>
										<div className="body">1.22 / 2.00 GB</div>
									</div>

									<div className="item">
										<div className="header">START DATE</div>
										<div className="body">Fri Jul 17 2020</div>
									</div>

									<div className="item">
										<div className="header">END DATE</div>
										<div className="body">Sat Sep 05 2020</div>
									</div>
								</div>
							</div>
						
							<div className="chart">
								<div className="label">USAGE GRAPH</div>

								<div className="chart-wrap">
									<img className="bg" src="./assets/img/chart-bg.png" alt=""/>

									<span style={this.state.tooltipTop}>0.1 / 2 GB</span>

									<ul className="area-chart">
										<li onMouseLeave={() => {this.hideTooltip('12%')}} onMouseEnter={() => {this.showTooltip('12%', 0)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('15%')}} onMouseEnter={() => {this.showTooltip('15%', 1)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('15%')}} onMouseEnter={() => {this.showTooltip('15%', 2)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('18%')}} onMouseEnter={() => {this.showTooltip('18%', 3)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('28%')}} onMouseEnter={() => {this.showTooltip('25%', 4)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('30%')}} onMouseEnter={() => {this.showTooltip('30%', 5)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('37%')}} onMouseEnter={() => {this.showTooltip('37%', 6)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('43%')}} onMouseEnter={() => {this.showTooltip('43%', 7)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('55%')}} onMouseEnter={() => {this.showTooltip('50%', 8)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('60%')}} onMouseEnter={() => {this.showTooltip('58%', 9)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('65%')}} onMouseEnter={() => {this.showTooltip('65%', 10)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('76%')}} onMouseEnter={() => {this.showTooltip('72%', 11)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('84%')}} onMouseEnter={() => {this.showTooltip('77%', 12)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('89%')}} onMouseEnter={() => {this.showTooltip('83%', 13)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('90%')}} onMouseEnter={() => {this.showTooltip('88%', 14)}}></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="block-row">
					<div className="left">
						<div className="main-block logs">
							<div className="label">
								<span>Proxy List</span>
								<div className="custom-tooltip">100 Proxies</div>
							</div>

							<div className="list">
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
								<p>privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA</p>
							</div>

							<div className="actions">
								<div className="main-btn">CLEAR</div>

								<div className="btn-wrap">
									<div className="main-btn active">COPY</div>
									<div className="main-btn active">DOWNLOAD</div>
								</div>
							</div>
						</div>
					</div>

					<div className="right">
						<div className="main-block purchase-center">
							<div className="label">Top Up Proxy Plan </div>
							<div className="sublabel">Select your preferred option and top up your data.</div>

							<div className="select-qty">
								<div className="label">PROXY PLAN</div>

								<div className="select">
									<span>AXIOM Private Pool - 2GB - $50.00</span>
									<img src="./assets/img/tringle-arrow.svg" alt="tringle"/>
								</div>
							</div>

							<div className="note">
								Your plan will expire in 29 days. In order to keep your plan active, please top up beforehand.
							</div>

							<div className="actions">
								<div className="main-btn">MY PLANS</div>
								<div className="main-btn active">PURCHASE</div>
							</div>
						</div>
					</div>
				</div>
            </div>
		)
	}
}