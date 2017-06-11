import React, { Component } from 'react';
import '../style/SimpleTitle.css';

class SimpleTitle extends Component {
	constructor(props) {
	  	super(props);
	}
	render() {
		return(
			<div className="title">
                {this.props.data.title}
			</div>
		)
	}
}

export default SimpleTitle;