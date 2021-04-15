// This is the Hook for getting data from the Api
import { useState } from 'react';
import { instance, TRACE_MOE_QUERY } from '../Api/constant';
// import { animedata } from './useanimeinfo';

export const useFetchdata = imagedata => {
	const [apidata, setApidata] = useState('');
	const [anilistid, setanilistid] = useState('xyz');

	const fileUpload = async e => {
		e.preventDefault();
		const body = JSON.stringify({
			image: imagedata,
		});

		try {
			const { data } = await instance.post(TRACE_MOE_QUERY, body);
			console.log(data);
			setApidata(data.docs[0].anilist_id);
			setanilistid(data.docs[0].anilist_id);
			// animedata(data.docs[0].anilist_id);
		} catch (error) {
			if (error.response) return console.log('Something went wrong in the backend', error);
			if (error.request) return console.log('Due to network issue', error);
			return console.log('something else happened', error);
		}
	};
	return { fileUpload, apidata, anilistid };
};
