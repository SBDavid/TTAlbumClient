import React, { Component } from 'react';

import Banner from './Banner';
import List from './List';

const componentList = {
  Banner: Banner,
  List: List,
};

class AppContainer extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
	    	// components: props.components,
	  	};
	}
	render() {

		const components = this.props.components.map((component) => {

			let ComponentName = componentList[component.name]

			return (
				<ComponentName key={component.id} {...component}>
		  		</ComponentName>
			)
		});

		return(
			<div>
				{components}
			</div>
		)
	}
}

export default AppContainer;