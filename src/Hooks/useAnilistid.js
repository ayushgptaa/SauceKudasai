// This is the Hook for getting Amilistid
import { useState, useEffect } from 'react';
import { instance, TRACE_MOE_QUERY } from '../Api/constant';

export const useAnilistid = imagedata => {
	const [anilistid, setanilistid] = useState(null);
	const [loading, setloading] = useState(false);
	const [video, setVideo] = useState(null);

	// Use effect is used to remove video when new image is selected
	useEffect(() => {
		return () => {
			setVideo(null);
		};
	}, [imagedata]);

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
			setVideo(config.url);
			setloading(false);
		} catch (error) {
			setloading(false);
			if (error.response) return console.log('Something went wrong in the backend', error);
			if (error.request) return console.log('Due to network issue', error);
			return console.log('something else happened', error);
		}
	};
	return { fileUpload, anilistid, loading, video };
};
