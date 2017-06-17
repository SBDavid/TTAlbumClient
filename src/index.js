import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/appContainer';
import registerServiceWorker from './registerServiceWorker';
import { getAlbumById } from './api/album';
import { getPage } from './api/page';
import './index.css';


var path = window.location.pathname + window.location.search;
console.info(path)
getPage(path).then(response => {
	
	var data = response.data;
	document.title = data.repository.head.title;

	ReactDOM.render(<AppContainer components={data.repository.body.node} />, document.getElementById('root'));
	registerServiceWorker();
});