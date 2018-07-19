import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import store from "./store";

//actions and action creators
//reducers and combine reducers
//createstore, middleware? logger...
//mapdispatchtoprops, app dispatches actions which are handled by reducer
//reducer changes state and stores in store, app rerenders
//mapstatetoprops
//maps are for smart comp
//dumb components are just presentational

//provider, provides state to app

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));


//????????????????????
registerServiceWorker();
