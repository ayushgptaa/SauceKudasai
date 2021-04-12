// This is the Hook for getting data from the Api
import { useState } from 'react';
import { instance, TRACE_MOE_QUERY } from '../Api/constant';
import { animedata } from './useanimeinfo';

export const useFetchdata = imagedata => {
	const [apidata, setApidata] = useState([]);

	const fileUpload = async e => {
		e.preventDefault();
		const body = JSON.stringify({
			image: imagedata,
		});

		try {
			const { data } = await instance.post(TRACE_MOE_QUERY, body);
			console.log(data);
			setApidata(data.docs);
			animedata(data.docs[0].anilist_id);
		} catch (error) {
			console.error(error);
		}
	};
	return { fileUpload, apidata };
};
