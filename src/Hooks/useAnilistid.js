/** @format */

// This is the Hook for getting Amilistid
import { useState, useEffect } from 'react';
import { instance, TRACE_MOE_QUERY } from '../Api/constant';

export const useAnilistid = (image, url) => {
	const [anilistid, setanilistid] = useState(null);
	const [loading, setloading] = useState(false);
	const [video, setVideo] = useState(null);
	const [time, settime] = useState('');
	const [episode, setepisode] = useState('');

	// This function is called to setstates
	const Changestates = (anilist, video, episode, from) => {
		setanilistid(anilist);
		setVideo(video);
		settime(from);
		setepisode(episode);
		setloading(false);
	};

	// Use effect is used to remove video when new image is selected
	useEffect(() => {
		if (image) return setVideo(null);
	}, [image]);

	// Use effect is used to remove video when new url is selected
	useEffect(() => {
		return () => {
			setVideo(null);
		};
	}, [url]);

	const fileUpload = async e => {
		e.stopPropagation();
		let formData = new FormData();
		formData.set('image', image);
		const body = formData;
		if (image || url) {
			setloading(true);
			setanilistid(null);
		}
		try {
			if (url) {
				const { data } = await instance.get(
					`?url=${encodeURIComponent(url)}`
				);
				const { anilist, video, episode, from } = data.result[0];
				Changestates(anilist, video, episode, from);
			} else {
				const { data } = await instance.post(TRACE_MOE_QUERY, body);
				const { anilist, video, episode, from } = data.result[0];
				Changestates(anilist, video, episode, from);
			}
		} catch (error) {
			setloading(false);
			if (error.response)
				return console.log(
					'Something went wrong in the backend',
					error
				);
			if (error.request)
				return console.log('Due to network issue', error);
			return console.log('something else happened', error);
		}
	};
	return { fileUpload, anilistid, loading, video, time, episode };
};
