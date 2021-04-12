// This is the Hook for getting data from the Api
import { useState } from 'react';
import { instance, TRACE_MOE_QUERY } from '../Api/constant';

export const UseFetchdata = imagedata => {
	const [apidata, setApidata] = useState([]);

	const fileUpload = async e => {
		e.preventDefault();
		const body = JSON.stringify({
			image: imagedata,
		});
		try {
			const { data } = await instance.post(TRACE_MOE_QUERY, body); // post request to the server
			setApidata(data.docs);
			console.log(data.docs);
		} catch (error) {
			console.error(error);
		}
	};
	return { fileUpload, apidata };
};
