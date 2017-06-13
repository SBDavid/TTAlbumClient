import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/appContainer';
import registerServiceWorker from './registerServiceWorker';
import { getAlbumById } from './api/album';
import './index.css';


var path = window.location.pathname;
var user = undefined;
var album = path.split('/')[2] || undefined;

getAlbumById(user, album).then(response => {
	
	var data = response.data;
	document.title = data.document.title;

	ReactDOM.render(<AppContainer components={data.components} />, document.getElementById('root'));
	registerServiceWorker();
});