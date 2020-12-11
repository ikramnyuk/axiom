import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './style.scss';

export default class ISP extends Component {
	constructor(props) {
		super(props);
		this.state = {
			premium: true,
			selectOpened3: false,
			selected3: '25 Proxies - $75.00',
			selectOpened: false,
			selected: '',
			selectOpened2: false,
			selected2: '',
			newIP: '',
			ips: ['88.132.32.15', '88.132.32.15', '88.132.32.15', '88.132.32.15', '88.132.32.15']
		}
	}

	componentDidMount(){
		if(this.props.match.params.type === 'ips'){
			this.setState({premium: true});
		}else{
			this.setState({premium: false});
		}

		let self = this,
			element3 = document.querySelector('#select'),
			element31 = document.querySelector('#select31'),
			element = document.querySelector('#select'),
			element11 = document.querySelector('#select11'),
			element2 = document.querySelector('#select2'),
			element21 = document.querySelector('#select21');

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
		}
	
		document.addEventListener('click', outsideClickListener)
	}

	updateInputValue(evt) {
		this.setState({
			newIP: evt.target.value
		});
	}

	removeIp(index){
		let ips = this.state.ips;
		ips.splice(index, 1);
		this.setState({ips});
	}

	copy(){
		let element = document.querySelector("#logs");
		
		navigator.clipboard.writeText(element.value);
	}
	
	render () {
		return (
			<div className="page dashboard-container isp">
                <div className="left">
					<div className="main-block collections">
						<div className="label">Data Center Collection</div>
						<div className="sublabel">Select the Data Center collection you would like to view in the dashboard.</div>

						<div className="actions">
							<div id="select" onClick={() => {this.setState({selectOpened: true, premium: true})}} className={this.state.premium ? "active main-btn" : "hover main-btn"}>
								<span id="select11">{this.state.selected} ISP DC <br/> PROXIES</span> {this.state.premium ? <img className={this.state.selectOpened ? "img-opened" : ""} src="./assets/img/tringle-dark-arrow.svg" alt="tringle"/> : <img src="./assets/img/tringle-arrow.svg" alt="tringle"/>}
								
								<div className={this.state.selectOpened ? "opened select-wrap" : "select-wrap"}>
									<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened: false, selected: 'US'})}}>US ISP DC PROXIES</span>
									<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened: false, selected: 'EU'})}}>EU ISP DC PROXIES</span>
								</div>
							</div>
							<div id="select2" onClick={() => {this.setState({selectOpened2: true, premium: false})}} className={!this.state.premium ? "active main-btn" : "hover main-btn"}>
								<span id="select21">{this.state.selected2} PREMIUM DC <br/> PROXIES</span> {!this.state.premium ? <img className={this.state.selectOpened2 ? "img-opened" : ""} src="./assets/img/tringle-dark-arrow.svg" alt="tringle"/> : <img src="./assets/img/tringle-arrow.svg" alt="tringle"/>}
								
								<div className={this.state.selectOpened2 ? "opened select-wrap" : "select-wrap"}>
									<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened2: false, selected2: 'US'})}}>US PREMIUM DC PROXIES</span>
									<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened2: false, selected2: 'EU'})}}>EU PREMIUM DC PROXIES</span>
								</div>
							</div>
						</div>
					</div>

					{!this.state.premium ? <div className="main-block">
						<div className="label">
							<span>Plan Information</span>
							<div className="status">Active</div>
						</div>

						<div className="server-details">
							<div className="custom-row">
								<div className="item">
									<div className="header">PLAN TOKEN</div>
									<div className="body">aasdFQWsf</div>
								</div>

								<div className="item">
									<div className="header">LOCATION</div>
									<div className="body">Virginia, US</div>
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
					</div> : <div className="main-block">
						<div className="label">
							<span>Plan Information</span>
							<div className="status error">Expired</div>
						</div>

						<div className="server-details">
							<div className="custom-row">
								<div className="item">
									<div className="header">PLAN TOKEN</div>
									<div className="body">aasdFQWsf</div>
								</div>

								<div className="item">
									<div className="header">LOCATION</div>
									<div className="body">Virginia, US</div>
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
					</div>}

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
						</div> : <div className="list-wrapp"><div className="list"></div></div>}

						<div className="actions">
							<div className="main-btn disabled">CLEAR</div>

							<div className="btn-wrap">
								<div className="main-btn active" onClick={() => {this.copy()}}>COPY</div>
								<a href="./logs.txt" target="_blank" download className="main-btn active">DOWNLOAD</a>
							</div>
						</div>
					</div>
				</div>

				<div className="right">
					<div className="main-block ips">
						<div className="label">IP Authentication</div>
						<div className="sublabel">Authenticate the IPs you'd like to use your DCs from.</div>

						<div className="input">
							<div className="left">
								<div className="header">IP ADDRESS</div>
								<input value={this.state.newIP} onChange={evt => this.updateInputValue(evt)} type="text"/>
							</div>

							<div onClick={() => {let ips = this.state.ips; ips.push(this.state.newIP); this.setState({ips})}} className="main-btn active">ADD</div>
						</div>

						<div className="note">
							Remember you can auth up to 5 x IP addresses, by adding the public IPv4 above.
						</div>

						<div className="ips-container">
							<div className="header">AUTHENTICATED IPs</div>

							<div className="list">
								{this.state.ips.map((item, key) => {
									return(<div className="item" key={key}><span>{item}</span><img onClick={() => {this.removeIp(key)}} src="./assets/img/close.svg" alt="close"/></div>)
								})}
							</div>
						</div>
					</div>

					<div className="main-block purchase-center">
						<div className="label">Purchase Data Center Proxies</div>
						<div className="sublabel">Select your preferred option and purchase your proxies.</div>

						<div className="select-qty">
							<div className="label">QUANTITY</div>

							<div id="select" className={this.state.selectOpened3 ? 'select open' : 'select'} onClick={() => {this.setState({selectOpened3: true})}}>
							<span id="select31">AXIOM ISP DCs - { this.state.selected3 }</span>
								<img src="./assets/img/tringle-arrow.svg" alt="tringle"/>

								<div className={this.state.selectOpened3 ? "opened select-wrap" : "select-wrap"}>
									<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened3: false, selected3: '25 Proxies - $75.00'})}}>AXIOM ISP DCs - 25 Proxies - $75.00</span>
									<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened3: false, selected3: '50 Proxies - $120.00'})}}>AXIOM ISP DCs - 50 Proxies - $120.00</span>
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
		)
	}
}