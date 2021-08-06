/** @format */

import { createContext, useState } from 'react';

import React from 'react';

export const Context = createContext();
export const ContextProvider = props => {
	const [image, setimage] = useState(null);
	const onChange = async acceptedfile => {
		console.log('onchangecalled');
		const file = acceptedfile[0];
		if (file && file.type.substr(0, 5) === 'image') return setimage(file);
	};
	const createContext = {
		onChange: onChange,
		image: image,
	};
	return <Context.Provider value={createContext}>{props.children}</Context.Provider>;
};
