import React, { Component } from 'react';
import '../style/SimpleTitle.css';

class SimpleTitle extends Component {
	render() {
		return(
			<div className="title">
                {this.props.data.title}
				<span>{process.env.REACT_APP_SECRET_CODE}</span>
			</div>
		)
	}
}

export default SimpleTitle;