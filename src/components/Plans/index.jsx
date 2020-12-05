import React, { Component } from 'react';

import './style.scss';

export default class Plans extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount(){
		console.log(this.props.plans);
	}

	render () {
		return (
			<div className="main-block plans">
				<div className="label">
					<span>{ this.props.lable }</span>
					<span className="custom-tooltip">1 Active Plan</span>
				</div>

				<div className="plans-container">
					{ this.props.plans.map((plan, key) => {
						return (<div className="plan" key={key}>
							{plan.map((item, key) => {
								return (<div className="plan-cell" style={ item.width ? item.width : {} } key={key}>
									<div className="header">{item.header}</div>
									<div className="body">{item.body}</div>
								</div>)
							})}
							<div className="main-btn active plan-btn">SEE</div>
						</div>)
					})}
				</div>
			</div>
		)
	}
}