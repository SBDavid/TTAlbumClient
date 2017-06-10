import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/appContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var components = [
	{
		template: 'SimpleList',
		id: 1,
		data: [
			'http://ec2-52-15-52-128.us-east-2.compute.amazonaws.com/static1/img/david/1.jpg',
			'http://ec2-52-15-52-128.us-east-2.compute.amazonaws.com/static1/img/david/2.jpg',
			'http://ec2-52-15-52-128.us-east-2.compute.amazonaws.com/static1/img/david/3.jpg',
		]
	}
]

ReactDOM.render(<AppContainer components={components} />, document.getElementById('root'));
registerServiceWorker();
