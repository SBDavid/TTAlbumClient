// 拍立得相纸组件
import React, { Component } from 'react';
import style from '../../style/album/polaroidPaper.css';
import LazyLoad from 'react-lazy-load';

class PolaroidPaper extends Component {
	render() {
		console.info(this.props)
		return(
			<div className={style.box}>
				<LazyLoad offsetVertical={30}>
                	<img className={style.pic} src={this.props.photo.src}/>
				</LazyLoad>
                <div className={style.descBox}>
					<div className={style.desc}>{this.props.photo.desc}</div>
				</div>
			</div>
		)
	}
}

export default PolaroidPaper;