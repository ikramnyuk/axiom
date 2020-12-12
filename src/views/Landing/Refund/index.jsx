import React, { Component } from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default class Refund extends Component {
	render () {
		return (
			<div className="refund-wrap">
                <Header/>
                
                <div className="main-wrap">
					<div className="page main-container">
                <div className="privacy">
					<div className="left">
						<div className="label">
							<div className="date">Effective October 1st, 2020</div>
							<div className="title">Refund Policy</div>
						</div>
					</div>
					
					<div className="right">
						<div className="intro">
							Our Website offers non-physical, digital goods. We do not provide refunds after the product is purchased, which you acknowledge prior to purchasing any product on the Website. Any attempt to file a false claim to pursue a refund will be seen as a violation of these Terms and can be pursed to in court.
						</div>

						
					</div>
				</div>
            </div>
				</div>

				<Footer />
			</div>
		)
	}
}