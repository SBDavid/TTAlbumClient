import React, { Component } from 'react';
import '../style/Error.css';

class Error extends Component {

	render() {
		return(
			<div>
                <div className="title">{this.props.data.title}</div>
                <div className="message">{this.props.data.message}</div>
                <div className="detail">{this.props.data.detail}</div>
			</div>
		)
	}
}

export default Error;