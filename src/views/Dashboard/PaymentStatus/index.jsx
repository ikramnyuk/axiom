import React, { Component } from 'react';

import './style.scss';

export default class PaymentStatus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: false
		}
	}

	render () {
		return (
			<div className="dashboard-container">
				{!this.state.error ? <div className="main-block payment-status">
					<div className="label">Payment Successful!</div>
					<div className="sublabel">Don't forget to join our Discord server to stay up to date with the latest guides and updates. See you there!</div>
				
					<div className="actions">
						<div className="main-btn">DISCORD INVITE</div>
						<div className="main-btn active" onClick={() => {this.setState({error: true})}}>GO TO DASHBOARD</div>
					</div>
				</div> : '' }

				{this.state.error ? <div className="main-block payment-status">
					<div className="label">Payment Failed!</div>
					<div className="sublabel">Something went wrong when we tried to charge your card. Make sure everything is okay on your end and try again.</div>
				
					<div className="actions">
						<div className="main-btn">BACK</div>
						<div className="main-btn error" onClick={() => {this.setState({error: false})}}>RETRY PAYMENT</div>
					</div>
				</div> : '' }
			</div>
		)
	}
}