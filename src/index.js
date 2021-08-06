/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from 'store/Context-Provider';
import App from './App';

ReactDOM.render(
	<ContextProvider>
		<App />
	</ContextProvider>,
	document.getElementById('root')
);
