import React, { Component } from 'react';
import '../style/Banner.css';
class Banner extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
	    	// components: props.components,
	  	};
	}
	render() {
		return(
			<div className="banner-container">
				<span>{this.props.title}</span>
			</div>
		)
	}
}

export default Banner;