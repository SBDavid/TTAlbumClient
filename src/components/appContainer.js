import React, { Component } from 'react';

import SimpleList from './SimpleList';
import SimpleTitle from './SimpleTitle';

const componentList = {
	SimpleTitle: SimpleTitle,
  	SimpleList: SimpleList,
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

			let ComponentName = componentList[component.template]

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