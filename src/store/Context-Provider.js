/** @format */

import { createContext, useState, useEffect } from 'react';

import React from 'react';

const defaultstate = {
	onChange: () => {},
	image: null,
	urlhandler: () => {},
	url: null,
};
export const Context = createContext(defaultstate);
export const ContextProvider = props => {
	const [image, setimage] = useState(null);
	const [url, seturl] = useState(null);

	// if user selects an image or if the image exits the value of url is set to empty
	useEffect(() => {
		if (image) return seturl('');
	}, [image]);

	const onChange = async acceptedfile => {
		console.log('onchangecalled');
		const file = acceptedfile[0];
		if (file && file.type.substr(0, 5) === 'image') return setimage(file);
	};
	const urlhandler = async e => {
		const url = e.target.value;
		console.log(url);
		if (url) return seturl(url);
		return seturl('');
	};

	const createContext = {
		onChange: onChange,
		image: image,
		urlhandler: urlhandler,
		url: url,
	};
	return <Context.Provider value={createContext}>{props.children}</Context.Provider>;
};
