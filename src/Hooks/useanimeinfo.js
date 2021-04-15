// This is the hook for getting Anime info using anilist id recieved from
import { useEffect, useState } from 'react';
import { instance, ANILIST_QUERY, query } from '../Api/constant';

export const useAnimedata = anilistid => {
	const [information, setinformation] = useState(null);

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
			console.log(data.data.Media);
			setinformation(data.data.Media);
		} catch (error) {
			console.log(error);
		}
	};

	if (information) return information;
	return null;
};
