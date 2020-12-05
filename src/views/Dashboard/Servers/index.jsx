import React, { Component } from 'react';

import './style.scss';

export default class Servers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			unsibscribe: false
		}
	}

	render () {
		return (
			<div className="page dashboard-container servers">
                <div className="left">
					<div className="main-block">
						<div className="label">
							<span>Bare Metal Server #1</span>
							<div className="status">Active</div>
						</div>

						<div className="server-details">
							<div className="custom-row">
								<div className="item">
									<div className="header">IP ADDRESS</div>
									<div className="body">255.255.255.0</div>
								</div>

								<div className="item">
									<div className="header">LOCAtion</div>
									<div className="body">Virginia, US</div>
								</div>

								<div className="item">
									<div className="header">USERNAME</div>
									<div className="body">AxiomServers</div>
								</div>

								<div className="item">
									<div className="header">PASSWORD</div>
									<div className="body">CillysenGFX</div>
								</div>
							</div>

							<div className="custom-row">
								<div className="item">
									<div className="header">start date</div>
									<div className="body">Fri Jul 16 2020</div>
								</div>

								<div className="item">
									<div className="header">end date</div>
									<div className="body">Sat Sep 04 2020</div>
								</div>

								<div className="item hidden"></div>

								<div className="item">
									<div onClick={() => {this.setState({unsibscribe: true})}} className="main-btn active">UNSUSCRIBE</div>
								</div>
							</div>
						</div>
					</div>

					<div className="main-block">
						<div className="label">
							<span>Bare Metal Server #2</span>
							<div className="status">Active</div>
						</div>

						<div className="server-details">
							<div className="custom-row">
								<div className="item">
									<div className="header">IP ADDRESS</div>
									<div className="body">215.225.125.0</div>
								</div>

								<div className="item">
									<div className="header">LOCAtion</div>
									<div className="body">Virginia, US</div>
								</div>

								<div className="item">
									<div className="header">USERNAME</div>
									<div className="body">AxiomServers</div>
								</div>

								<div className="item">
									<div className="header">PASSWORD</div>
									<div className="body">CillysenDesigner</div>
								</div>
							</div>

							<div className="custom-row">
								<div className="item">
									<div className="header">start date</div>
									<div className="body">Fri Jul 18 2020</div>
								</div>

								<div className="item">
									<div className="header">end date</div>
									<div className="body">Sat Sep 06 2020</div>
								</div>

								<div className="item hidden"></div>

								<div className="item">
									<div onClick={() => {this.setState({unsibscribe: true})}} className="main-btn active">UNSUSCRIBE</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="right">
					<div className="main-block">
						<div className="label">Purchase Servers</div>
						<div className="sublabel">Select your preferred option and purchase your server.</div>

						<div className="select-qty">
							<div className="label">QUANTITY</div>

							<div className="select">
								<span>AXIOM Bare Metal Server - 1 Server - $110.00/m</span>
								<img src="./assets/img/tringle-arrow.svg" alt="tringle"/>
							</div>
						</div>

						<div className="note">
							Server plans are recurring, meaning your server will renew 30 days after purchasing if you don't cancel.
						</div>

						<div className="actions">
							<div className="main-btn">MY PLANS</div>
							<div className="main-btn active">PURCHASE</div>
						</div>
					</div>
				</div>
            
				{this.state.unsibscribe ? <div className="unsibscribe-popup">
					<div className="overlay"></div>

					<div className="main-block">
						<div className="label">Unsuscribe</div>
						<div className="sublabel">Do you really want to unsubscribe "Bare Metal Server #1"?</div>

						<div className="alert">IMPORTANT: This action can NOT be reverted!</div>

						<div className="actions">
							<div onClick={() => {this.setState({unsibscribe: false})}} className="main-btn">CANCEL</div>
							<div onClick={() => {this.setState({unsibscribe: false})}} className="main-btn active">UNSUBSCRIBE</div>
						</div>
					</div>
				</div> : ''}
			</div>
		)
	}
}