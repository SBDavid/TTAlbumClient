import React, { Component } from 'react';
import style from '../style/Error.css';

class Error extends Component {

	render() {
		return(
			<div>
                <div className={style.title}>{this.props.data.title}</div>
                <div className={style.message}>{this.props.data.message}</div>
                <div className={style.detail}>{this.props.data.detail}</div>
			</div>
		)
	}
}

export default Error;