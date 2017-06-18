// 拍立得相册
import React, { Component } from 'react';
import style from '../../style/album/polaroidList.css';
import PolaroidPaper from './PolaroidPaper';

class PolaroidList extends Component {
    
	render() {

        const components = this.props.apiData.dataSet.photos.map(photo => {
            return(
                <div className={style.photo}>
                    <PolaroidPaper key={photo} photo={photo}>
                    </PolaroidPaper>
                </div>
            )
        });

		return(
			<div>
                {components}
			</div>
		)
	}
}

export default PolaroidList;