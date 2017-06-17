import React, { Component } from 'react';

import SimpleList from './SimpleList';
import SimpleTitle from './SimpleTitle';
import ErrorPage from './Error';

// album相关组件
import PolaroidPaper from './album/PolaroidPaper';
import PolaroidList from './album/PolaroidList';


const componentList = {
	SimpleTitle: SimpleTitle,
  	SimpleList: SimpleList,
	Error: ErrorPage,
	PolaroidList: PolaroidList,
	PolaroidPaper: PolaroidPaper
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

			let ComponentName = componentList[component.templateId]

			return (
				<ComponentName key={component.sort} {...component}>
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