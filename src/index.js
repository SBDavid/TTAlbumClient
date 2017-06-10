import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/appContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var components = [
	{
		name: 'Banner',
		id: 1,
		title: 'title',
	},
	{
		name: 'List',
		id: 3,
		items: [
			{
				title:'title1',
				id: 1,
			},
			{
				title:'title2',
				id: 2,
			}
		]
	}
]

ReactDOM.render(<AppContainer components={components} />, document.getElementById('root'));
registerServiceWorker();
