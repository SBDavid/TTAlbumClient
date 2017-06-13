import React, { Component } from 'react';
import style from '../style/SimpleList.css';

class SimpleList extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
	    	// components: props.components,
	  	};
	}
	render() {

        const components = this.props.data.map(photoPath => {
            return(
                <img className={style.photo} key={photoPath} src={photoPath} alt={photoPath}>
                </img>
            )
        });

        return(
			<div>
				{components}
			</div>
		)
	}
}

export default SimpleList;