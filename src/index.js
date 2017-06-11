import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/appContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var data = {
	document: {
		title: '投投的相册',
	},
	components: 
	[
		{
			template: 'SimpleTitle',
			id: 1,
			data: {
				title: '透透美美',
			}
		},
		{
			template: 'SimpleList',
			id: 2,
			data: [
				'http://ec2-52-15-52-128.us-east-2.compute.amazonaws.com/static1/img/david/1.jpg',
				'http://ec2-52-15-52-128.us-east-2.compute.amazonaws.com/static1/img/david/2.jpg',
				'http://ec2-52-15-52-128.us-east-2.compute.amazonaws.com/static1/img/david/3.jpg',
			]
		}
	]
}

document.title = data.document.title;

ReactDOM.render(<AppContainer components={data.components} />, document.getElementById('root'));
registerServiceWorker();
