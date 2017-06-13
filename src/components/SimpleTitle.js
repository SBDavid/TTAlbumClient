import React, { Component } from 'react';
import style from '../style/SimpleTitle.css';

class SimpleTitle extends Component {
	render() {
		return(
			<div className={style.title}>
                {this.props.data.title}
				<span>{process.env.REACT_APP_SECRET_CODE}</span>
			</div>
		)
	}
}

export default SimpleTitle;