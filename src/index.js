/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceworker from './serviceWorkerRegistration';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
serviceworker.register();
