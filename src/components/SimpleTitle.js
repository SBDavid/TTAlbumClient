/*简单图片列表*/

import React, { Component } from 'react';
import style from '../style/SimpleTitle.css';

class SimpleTitle extends Component {
	render() {
		return(
			<div className={style.title}>
				{/* 如果有动态数据，则取动态数据 */}
                {this.props.apiData ? this.props.apiData.dataSet.title : this.props.data.title}
			</div>
		)
	}
}

export default SimpleTitle;