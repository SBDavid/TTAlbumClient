// 拍立得相纸组件
import React, { Component } from 'react';
import style from '../../style/album/polaroidPaper.css';

class PolaroidPaper extends Component {
	render() {
		console.info(this.props)
		return(
			<div className={style.box}>
                <img className={style.pic} src={this.props.photo.src}/>
                <div className={style.desc}>{this.props.photo.desc}</div>
			</div>
		)
	}
}

export default PolaroidPaper;