import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './style.scss';

export default class Servers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			unsibscribe: false,
			selectOpened: false,
			selected: '1 Server - $110.00/m',
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

							<div id="select" className={this.state.selectOpened ? 'select open' : 'select'} onClick={() => {this.setState({selectOpened: true})}}>
								<span id="select11">AXIOM Bare Metal Server - { this.state.selected }</span>
								<img src="./assets/img/tringle-arrow.svg" alt="tringle"/>

								<div className={this.state.selectOpened ? "opened select-wrap" : "select-wrap"}>
									<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened: false, selected: '1 Server - $110.00/m'})}}>AXIOM Bare Metal Server - 1 Server - $110.00/m</span>
									<span onClick={(e) => {e.stopPropagation(); this.setState({selectOpened: false, selected: '2 Server - $150.00/m'})}}>AXIOM Bare Metal Server - 2 Server - $150.00/m</span>
								</div>
							</div>
						</div>

						<div className="note">
							Server plans are recurring, meaning your server will renew 30 days after purchasing if you don't cancel.
						</div>

						<div className="actions">
							<Link to="/dashboard" className="main-btn">MY PLANS</Link>
							<Link to="/dashboard/purchase" className="main-btn active">PURCHASE</Link>
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