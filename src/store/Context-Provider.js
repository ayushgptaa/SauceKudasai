/** @format */

import { createContext, useState } from 'react';
import { instance, TRACE_MOE_QUERY, ANILIST_QUERY, query } from '../Api/constant';
import React from 'react';

const defaultstate = {
	imagehandler: () => {},
	image: null,
	urlhandler: () => {},
	url: null,
	fileUpload: () => {},
	video: null,
	loading: false,
	animeinfo: null,
	animeinfoexits: false,
	cardhandler: () => {},
	servererror: false,
	usererror: false,
	errorhandler: () => {},
};

export const Context = createContext(defaultstate);

export const ContextProvider = props => {
	const [image, setimage] = useState(null);
	const [url, seturl] = useState('');
	const [video, setvideo] = useState(null);
	const [loading, setloading] = useState(false);
	const [animeinfoexits, setanimeinfoexits] = useState(false);
	const [animeinfo, setanimeinfo] = useState({});
	const [servererror, setServerError] = useState(false);
	const [usererror, setUserError] = useState(false);

	// This is used to Change states to default when new image or url is used
	const Changestates = () => {
		seturl('');
		setimage(null);
		setloading(false);
		setvideo(null);
		setanimeinfo({});
		setanimeinfoexits(false);
	};

	// This function is used to Remove the Result card
	const cardhandler = () => {
		setanimeinfoexits(false);
	};

	// This function is used to Remove the Error card
	const errorhandler = () => {
		setServerError(false);
		setUserError(false);
	};

	const fechanimeinfo = async (anilistid, episode, from, similarity) => {
		var variables = {
			id: anilistid,
		};
		const body = {
			query: query,
			variables: variables,
		};
		try {
			const { data } = await instance.post(ANILIST_QUERY, body);
			setanimeinfo({
				episode: episode,
				time: from,
				similarity: similarity,
				...data.data.Media,
			});
			setanimeinfoexits(true);
		} catch (error) {
			console.log(error);
		}
	};

	// Function to get the image when image is selected
	const imagehandler = async acceptedfile => {
		Changestates();
		const file = acceptedfile[0];
		if (file && file.type.substr(0, 5) === 'image') return setimage(file);
		return setimage(null);
	};

	// Function to get the url when url is used
	const urlhandler = async e => {
		Changestates();
		const url = e.target.value;
		if (url) return seturl(url);
		return seturl('');
	};

	// Get data from the trace.moe API and calls Anilist APi to get animeinfo
	const getdata = data => {
		const { anilist, video, episode, from, similarity } = data.result[0];
		setvideo(video);
		setloading(false);
		fechanimeinfo(anilist, episode, from, similarity);
	};

	const fileUpload = async e => {
		e.stopPropagation();
		setloading(false);
		let formData = new FormData();
		formData.set('image', image);
		const body = formData;
		if (image || url) {
			setloading(true);
		}
		try {
			if (url) {
				const { data } = await instance.get(`?url=${encodeURIComponent(url)}`);
				getdata(data);
			} else if (image) {
				const { data } = await instance.post(TRACE_MOE_QUERY, body);
				getdata(data);
			}
		} catch (error) {
			setloading(false);

			if (error.response) {
				const status = Array.from(String(error.response.status), Number);
				if (status[0] === 4) return setUserError(true);
				console.log('Something went wrong in the backend', error);
				return setServerError(true);
			}
			if (error.request) {
				console.log('Due to network issue or image not provided', error);
				return setUserError(true);
			}
			return console.log('something else happened', error);
		}
	};

	const createContext = {
		imagehandler,
		image,
		urlhandler,
		url,
		fileUpload,
		loading,
		video,
		animeinfo,
		animeinfoexits,
		cardhandler,
		servererror,
		usererror,
		errorhandler,
	};

	return <Context.Provider value={createContext}>{props.children}</Context.Provider>;
};
