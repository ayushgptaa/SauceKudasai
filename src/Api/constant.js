import axios from 'axios';
// For anilist_id
export const TRACE_MOE_QUERY = 'https://tace.moe/api/search';

// For Anime information
export const ANILIST_QUERY = 'https://graphql.anilist.co';

const body = obj => {
	return JSON.stringify(obj);
};

// General options
export const options = {
	method: 'POST',
	body,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
};

export const instance = axios.create({
	options,
});
