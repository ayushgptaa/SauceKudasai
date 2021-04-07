// This is the Hook for getting data from the Api
import { useState } from 'react';
import axios from 'axios';

export const UseFetchdata = imagedata => {
	const [apidata, setApidata] = useState([]);

	const fileUpload = async e => {
		e.preventDefault();
		console.log('Upload btn working');
		const body = JSON.stringify({
			image: imagedata,
		});
		const url = 'https://trace.moe/api/search';
		const headers = {
			'Content-Type': 'application/json',
		};
		try {
			const { data } = await axios.post(url, body, headers); // post request to the server
			setApidata(data.docs);
		} catch (error) {
			console.error(error);
		}
	};
	return { fileUpload, apidata };
};
