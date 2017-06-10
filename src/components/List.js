import React, { Component } from 'react';
import '../style/List.css';

class List extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
	    	// components: props.components,
	  	};
	}
	render() {
		var lis = this.props.items.map(item => {
			return (
				<li key={item.id}>
					<a>
						<img />
					</a>
					<span>{item.title}</span>
				</li>
			);
		})

		return(
			<ul>
				{lis}
			</ul>
		)
	}
}

export default List;