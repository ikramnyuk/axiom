import React, { Component } from 'react';

import './style.scss';

export default class ISP extends Component {
	constructor(props) {
		super(props);
		this.state = {
			premium: false,
			newIP: '',
			ips: ['88.132.32.15', '88.132.32.15', '88.132.32.15', '88.132.32.15', '88.132.32.15']
		}
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

	render () {
		return (
			<div className="page dashboard-container isp">
                <div className="left">
					<div className="main-block collections">
						<div className="label">Data Center Collection</div>
						<div className="sublabel">Select the Data Center collection you would like to view in the dashboard.</div>

						<div className="actions">
							<div onClick={() => {this.setState({premium: false})}} className={!this.state.premium ? "main-btn active" : "main-btn"}>ISP DATA CENTER</div>
							<div onClick={() => {this.setState({premium: true})}} className={this.state.premium ? "main-btn active" : "main-btn"}>PREMIUM DATA CENTER</div>
						</div>
					</div>

					<div className="main-block">
						<div className="label">
							<span>Plan Information</span>
							<div className="status">Active</div>
						</div>

						{!this.state.premium ? <div className="server-details">
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
						</div> : ""}

						{this.state.premium ? 
							<div className="server-details">
							<div className="custom-row">
								<div className="item">
									<div className="header">PLAN TOKEN</div>
									<div className="body">PPdmuyQQ</div>
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
						</div> : ""}
					</div>

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

							<div className="select">
								<span>AXIOM ISP DCs - 25 Proxies - $75.00</span>
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
		)
	}
}