import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/appContainer';
import registerServiceWorker from './registerServiceWorker';
import ApiFactory from './api/factory';
import './index.css';


ApiFactory.get('album/1').then(response => {
	
	var data = response.data;
	document.title = data.document.title;

	ReactDOM.render(<AppContainer components={data.components} />, document.getElementById('root'));
	registerServiceWorker();
});