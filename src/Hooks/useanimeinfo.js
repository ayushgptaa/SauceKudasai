// This is the hook for getting Anime info using anilist id recieved from

import { instance, ANILIST_QUERY, query } from '../Api/constant';

export const animedata = async anilistid => {
	var variables = {
		id: anilistid,
	};
	const body = {
		query: query,
		variables: variables,
	};
	try {
		const { data } = await instance.post(ANILIST_QUERY, body);
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
