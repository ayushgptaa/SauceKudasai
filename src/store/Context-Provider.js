/** @format */

import { createContext, useState, useReducer } from 'react';
import { instance, TRACE_MOE_QUERY } from '../Api/constant';
import React from 'react';

const defaultstate = {
	imagehandler: () => {},
	image: null,
	urlhandler: () => {},
	url: null,
	fileUpload: () => {},
};

const initialState = {
	anilistid: null,
	video: null,
	time: null,
	episode: null,
};

const reducerfn = (state, action) => {
	if (action.type === 'BTN_CLICKED') {
		const { anilist, video, episode, from } = action.animeinfo;
		return {
			anilistid: anilist,
			video: video,
			time: from,
			episode: episode,
		};
	}
	if (action.type === 'INITIAL_STATE') {
		return initialState;
	}
};

export const Context = createContext(defaultstate);
export const ContextProvider = props => {
	const [animeinfo, dispatch] = useReducer(reducerfn, initialState);

	const [image, setimage] = useState(null);
	const [url, seturl] = useState(null);
	const [loading, setloading] = useState(false);

	// if user selects an image or if the image exits the value of url is set to empty
	// useEffect(() => {
	// 	if (image) {
	// 		return {};
	// 	}
	// }, [image]);

	const imagehandler = async acceptedfile => {
		seturl(null);
		setloading(false);
		dispatch({ type: 'INITIAL_STATE' });
		const file = acceptedfile[0];
		if (file && file.type.substr(0, 5) === 'image') return setimage(file);
	};
	const urlhandler = async e => {
		seturl(null);
		setloading(false);
		dispatch({ type: 'INITIAL_STATE' });
		const url = e.target.value;
		console.log(url);
		if (url) return seturl(url);
		return seturl('');
	};
	const fileUpload = async e => {
		e.stopPropagation();
		let formData = new FormData();
		formData.set('image', image);
		const body = formData;
		if (image || url) {
			setloading(true);
		}
		try {
			if (url) {
				const { data } = await instance.get(`?url=${encodeURIComponent(url)}`);
				dispatch({ type: 'BTN_CLICKED', animeinfo: data.result[0] });
			} else {
				const { data } = await instance.post(TRACE_MOE_QUERY, body);
				dispatch({ type: 'BTN_CLICKED', animeinfo: data.result[0] });
			}
		} catch (error) {
			setloading(false);
			if (error.response) return console.log('Something went wrong in the backend', error);
			if (error.request) return console.log('Due to network issue', error);
			return console.log('something else happened', error);
		}
	};

	const createContext = {
		imagehandler: imagehandler,
		image: image,
		urlhandler: urlhandler,
		url: url,
		fileUpload: fileUpload,
		loading: loading,
		animeinfo: animeinfo,
	};
	return <Context.Provider value={createContext}>{props.children}</Context.Provider>;
};
