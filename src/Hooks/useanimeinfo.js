// This is the hook for getting Anime info using anilist id recieved from
import { useEffect, useState } from 'react';
import { instance, ANILIST_QUERY, query } from '../Api/constant';

export const useAnimeinfo = (anilistid, image, url) => {
	const [animeinfo, setanimeinfo] = useState(null);

	// to remove the anime info card when new image is selected
	useEffect(() => {
		return () => {
			setanimeinfo(null);
		};
	}, [image]);
	useEffect(() => {
		return () => {
			setanimeinfo(null);
		};
	}, [url]);
	useEffect(() => {
		if (anilistid) {
			return fetchdata(anilistid);
		}
	}, [anilistid]);
	const fetchdata = async anilistid => {
		var variables = {
			id: anilistid,
		};
		const body = {
			query: query,
			variables: variables,
		};
		try {
			const { data } = await instance.post(ANILIST_QUERY, body);
			setanimeinfo(data.data.Media);
			console.log(data.data.Media);
		} catch (error) {
			console.log(error);
		}
	};

	if (animeinfo) return animeinfo;
	return null;
};
