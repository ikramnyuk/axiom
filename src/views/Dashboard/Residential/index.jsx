import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './style.scss';

export default class Residetial extends Component {

	constructor(props) {
		super(props);
		this.state = {
			decrease: false,
			increase: false,
			isClear: false,
			qty: 0,
			tooltipTop: {bottom: '-200px', opacity: '0'},
			selectOpened: false,
			selected: 'AXIOM Private Pool - 2GB - $50.00',
			selectOpened2: false,
			selected2: 'Select between Static or Rotating proxies',
			selectOpened3: false,
			selected3: 'Select a Category or Region',
			selectOpened4: false,
			selected4: 'Select a Subcategory or Country',
		}
	}
	
	updateInputValue(evt) {
		this.setState({
			qty: evt.target.value
		});
	}

	componentDidMount(){
		let self = this,
			element = document.querySelector('#select'),
			element2 = document.querySelector('#select2'),
			element3 = document.querySelector('#select3'),
			element4 = document.querySelector('#select4'),
			element11 = document.querySelector('#select11'),
			element21 = document.querySelector('#select21'),
			element31 = document.querySelector('#select31'),
			element41 = document.querySelector('#select41')
		
		const outsideClickListener = event => {
			event.stopPropagation();

			if(event.target != element && event.target != element11) {
				self.setState({selectOpened: false})
			}

			if(event.target != element2 && event.target != element21) {
				self.setState({selectOpened2: false})
			}

			if(event.target != element3 && event.target != element31) {
				self.setState({selectOpened3: false})
			}

			if(event.target != element4 && event.target != element41) {
				self.setState({selectOpened4: false})
			}
		}
	
		document.addEventListener('click', outsideClickListener)
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

	copy(){
		if(this.state.isClear) return;

		let element = document.querySelector("#logs");
		
		navigator.clipboard.writeText(element.value);
	}

	startDecrease(){
		let interval = setInterval(() => {
			let qty = this.state.qty,
			formated = parseInt(qty);

			if(formated == 0){
				return;
			}

			formated--;

			this.setState({qty: formated});
		}, 100);

		this.setState({decrease: interval});
	}

	startIncrease(){
		let interval = setInterval(() => {
			let qty = this.state.qty,
			formated = parseInt(qty);

			if(formated == 100){
				return;
			}

			formated++;

			this.setState({qty: formated});
		}, 100);

		this.setState({increase: interval});
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

									<div id="select2" className="select" onClick={() => {this.setState({selectOpened2: true})}}>
										<span id="select21">{this.state.selected2}</span>
										<img src="./assets/img/tringle-arrow.svg" alt="tringle"/>

										<div className={this.state.selectOpened2 ? "opened select-wrap" : "select-wrap"}>
											<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened2: false, selected2: 'Static'})}}>Static</span>
											<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened2: false, selected2: 'Rotating'})}}>Rotating</span>
										</div>
									</div>
								</div>
								<div className="select-qty">
									<div className="label">CATEGORY / REGION</div>

									<div id="select3" className="select" onClick={() => {this.setState({selectOpened3: true})}}>
										<span id="select3">{this.state.selected3}</span>
										<img src="./assets/img/tringle-arrow.svg" alt="tringle"/>

										<div className={this.state.selectOpened3 ? "opened select-wrap" : "select-wrap"}>
											<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened3: false, selecte3: 'CATEGORY'})}}>CATEGORY</span>
											<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened3: false, selected3: 'REGION'})}}>REGION</span>
										</div>
									</div>
								</div>
								<div className="select-qty">
									<div className="label">SUBCATEGORY / COUNTRY</div>

									<div id="select4" className="select" onClick={() => {this.setState({selectOpened4: true})}}>
										<span id="select41">{this.state.selected4}</span>
										<img src="./assets/img/tringle-arrow.svg" alt="tringle"/>

										<div className={this.state.selectOpened4 ? "opened select-wrap" : "select-wrap"}>
											<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened4: false, selected4: 'Subcategory'})}}>Subcategory</span>
											<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened4: false, selected4: 'Country'})}}>Country</span>
										</div>
									</div>
								</div>

								<div className="select-qty">
									<div className="label">QUANTITY</div>

									<div className="qty-container">
										<div className="qty-input">
											<div onClick={() => {this.decrease()}} onMouseDown={() => {this.startDecrease()}} onMouseUp={() => {clearInterval(this.state.decrease) }} className="control"><img src="./assets/img/minus.svg" alt="minus"/></div>
											<input type="text" value={this.state.qty} onChange={evt => this.updateInputValue(evt)}/>
											<div onClick={() => {this.increase()}} onMouseDown={() => {this.startIncrease()}} onMouseUp={() => {clearInterval(this.state.increase) }} className="control"><img src="./assets/img/plus.svg" alt="plus"/></div>
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
										<li onMouseLeave={() => {this.hideTooltip('72%')}} onMouseEnter={() => {this.showTooltip('72%', 11)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('77%')}} onMouseEnter={() => {this.showTooltip('77%', 12)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('83%')}} onMouseEnter={() => {this.showTooltip('83%', 13)}}></li>
										<li onMouseLeave={() => {this.hideTooltip('84%')}} onMouseEnter={() => {this.showTooltip('84%', 14)}}></li>
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

							<textarea id="logs">
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
								privatepool.axiom.io:15432:DbboLCMA:ghadaHJNQJLdasdNDADkgnagwnKLIOQdalksQDAAAA
							</textarea>

							{!this.state.isClear ? <div className="list-wrapp"><div className="list">
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
							</div> : <div className="list"></div>}

							<div className="actions">
								<div className="main-btn" onClick={() => {this.setState({isClear: true})}}>CLEAR</div>

								<div className="btn-wrap">
									<div className="main-btn active" onClick={() => {this.copy()}}>COPY</div>
									<a href="./logs.txt" target="_blank" download className="main-btn active">DOWNLOAD</a>
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

								<div id="select" className="select" onClick={() => {this.setState({selectOpened: true})}}>
									<span id="select11">{this.state.selected}</span>
									<img src="./assets/img/tringle-arrow.svg" alt="tringle"/>

									<div className={this.state.selectOpened ? "opened select-wrap" : "select-wrap"}>
										<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened: false, selected: 'AXIOM Private Pool - 2GB - $50.00'})}}>2GB - $50.00</span>
										<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened: false, selected: 'AXIOM Private Pool - 4GB - $100.00'})}}>4GB - $100.00</span>
									</div>
								</div>
							</div>

							<div className="note">
								Your plan will expire in 29 days. In order to keep your plan active, please top up beforehand.
							</div>

							<div className="actions">
								<Link to="/dashboard" className="main-btn">MY PLANS</Link>
								<Link to="/dashboard/purchase" className="main-btn active">PURCHASE</Link>
							</div>
						</div>
					</div>
				</div>
            </div>
		)
	}
}