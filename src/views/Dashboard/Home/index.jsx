import React, { Component } from 'react';

import './style.scss';

import Plans from '../../../components/Plans';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			plans1: [
				[
					{header: 'PLAN TOKEN', body: 'DbboLCMD'},
					{header: 'START DATE', body: 'Fri Jul 17 2020'},
					{header: 'END DATE', body: 'Sat Sep 05 2020'},
					{header: 'CURRENT USAGE', body: '1.22 / 2.00 GB'}
				],
				[
					{header: 'PLAN TOKEN', body: 'NnduasQE'},
					{header: 'START DATE', body: 'Tue Sep 01 2020'},
					{header: 'END DATE', body: 'Thu Nov 01 2020'},
					{header: 'CURRENT USAGE', body: '0.56 / 5.00 GB'}
				]
			],

			plans2: [
				[
					{header: 'PLAN TOKEN', body: 'aasdFQWsf'},
					{header: 'START DATE', body: 'Fri Jul 17 2020'},
					{header: 'END DATE', body: 'Sat Sep 05 2020'},
					{header: 'COUNT', body: '100 DC VA Proxies'}
				]
			],

			plans3: [
				[
					{header: 'PLAN TOKEN', body: 'PPdmuyQQ'},
					{header: 'START DATE', body: 'Fri Jul 17 2020'},
					{header: 'END DATE', body: 'Sat Sep 05 2020'},
					{header: 'COUNT', body: '100 DC VA Proxies'}
				]
			],

			plans4: [
				[
					{header: 'IP ADDRESS', body: '255.255.255.0', width: {maxWidth: '116px'}},
					{header: 'USERNAME', body: 'AxiomServers', width: {maxWidth: '117px'}},
					{header: 'PASSWORD', body: 'CillysenGFX', width: {maxWidth: '128px'}},
					{header: 'END DATE', body: 'Sat Sep 04 2020', width: {maxWidth: '127px'}},
					{header: 'LOCATION', body: 'Virginia, US', width: {maxWidth: '99px'}}
				],
				[
					{header: 'IP ADDRESS', body: '255.255.255.0', width: {maxWidth: '116px'}},
					{header: 'USERNAME', body: 'AxiomServers', width: {maxWidth: '117px'}},
					{header: 'PASSWORD', body: 'CillysenDesigner', width: {maxWidth: '128px'}},
					{header: 'END DATE', body: 'Sat Sep 06 2020', width: {maxWidth: '127px'}},
					{header: 'LOCATION', body: 'Virginia, US', width: {maxWidth: '99px'}}
				]
			]
		};
	}

	render () {
		return (
			<div className="page dashboard-container home">
                <div className="left">
					<div className="main-block">
						<div className="label">Account Information</div>

						<div className="user-details">
							<div className="avatar">
								<img src="./assets/img/big-avatar.svg" alt="avatar"/>
							</div>
							<div className="info">
								<div className="welcome">Welcome,</div>
								<div className="name">Cillysen#0001</div>

								<div className="main-btn active invite">DISCORD INVITE</div>
							</div>
						</div>
					</div>

					<div className="main-block">
						<div className="label">Release Calendar</div>

						<div className="realeses">
							<div className="item">
								<img src="./assets/img/nike-1.svg" alt="nike"/>

								<div className="details">
									<div className="header">
										<div className="name">CQ3989-001</div>

										<div className="date">JUNE 11TH, 2020</div>
									</div>

									<div className="description">
										Nike Space Hippie 03 Vast Grey Hyper Crimson
									</div>
								</div>
							</div>

							<div className="item">
								<img src="./assets/img/nike-2.svg" alt="nike"/>

								<div className="details">
									<div className="header">
										<div className="name">CD0461-100</div>

										<div className="date">JUNE 26TH, 2020</div>
									</div>

									<div className="description">
										Nike Air Jordan 1 Retro High Tie Dye (W)
									</div>
								</div>
							</div>

							<div className="item">
								<img src="./assets/img/nike-3.svg" alt="nike"/>

								<div className="details">
									<div className="header">
										<div className="name">CU1727-100</div>

										<div className="date">JULY 1ST, 2020</div>
									</div>

									<div className="description">
										Nike Dunk Low University Red (2020)
									</div>
								</div>
							</div>

							<div className="item end">
								<img src="./assets/img/nike-4.svg" alt="nike"/>

								<div className="details">
									<div className="header">
										<div className="name">DD7050-100</div>

										<div className="date">SEPTEMBER 10TH, 2020</div>
									</div>

									<div className="description">
									Nike Air Force 1 Low Cactus Plant Flea Market (Nike By You)
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="right">
					<Plans plans={this.state.plans1} lable="My Plans - Residential" />
					<Plans plans={this.state.plans2} lable="My Plans - ISP Data Center" />
					<Plans plans={this.state.plans3} lable="My Plans - Premium Data Center" />
					<Plans plans={this.state.plans4} lable="My Plans - Servers"/>
				</div>
            </div>
		)
	}
}