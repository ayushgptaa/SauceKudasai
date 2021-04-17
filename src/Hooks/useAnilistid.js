// This is the Hook for getting Amilistid
import { useState } from 'react';
import { instance, TRACE_MOE_QUERY } from '../Api/constant';

export const useAnilistid = imagedata => {
	const [anilistid, setanilistid] = useState(null);
	const [loading, setloading] = useState(false);
	const [video, setVideo] = useState(null);

	const fileUpload = async e => {
		e.preventDefault();
		setloading(true);
		const body = JSON.stringify({
			image: imagedata,
		});

		try {
			const { data } = await instance.post(TRACE_MOE_QUERY, body);
			const { anilist_id, filename, at, tokenthumb } = data.docs[0];
			setanilistid(anilist_id);
			const { config } = await instance.get(
				`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(
					filename
				)}?t=${at}&token=${tokenthumb}`
			);
			console.log(config);
			setVideo(config.url);

			// const video = await instance.post;
		} catch (error) {
			if (error.response) return console.log('Something went wrong in the backend', error);
			if (error.request) return console.log('Due to network issue', error);
			return console.log('something else happened', error);
		}
	};
	return { fileUpload, anilistid, loading, video };
};
