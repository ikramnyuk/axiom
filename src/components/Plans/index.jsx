import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
					<span className="custom-tooltip">{this.props.plans.length} Active Plan</span>
				</div>

				<div className="plans-container">
					{ this.props.plans.map((plan, key) => {
						return (
							<div>
								<div className="plan" key={key}>
									{plan.map((item, key) => {
										return (<div className="plan-cell" style={ item.width ? item.width : {} } key={key}>
											<div className="header">{item.header}</div>
											<div className="body">{item.body}</div>
										</div>)
									})}
									<Link to={this.props.to} className="main-btn active plan-btn">SEE</Link>
								</div>

								<div className="plan mobile" key={key}>
									<div className="cell-container">
										{plan.map((item, key) => {
											return (<div className="plan-cell" style={ item.width ? item.width : {} } key={key}>
												<div className="header">{item.header}</div>
												<div className="body">{item.body}</div>
											</div>)
										})}
									</div>
									<Link to={plan.to} className="main-btn active plan-btn">SEE</Link>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}