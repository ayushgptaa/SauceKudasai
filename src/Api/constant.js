import axios from 'axios';

// For anilist_id
export const TRACE_MOE_QUERY = 'https://trace.moe/api/search';

// For Anime information
export const ANILIST_QUERY = 'https://graphql.anilist.co';

export const body = obj => {
	return JSON.stringify(obj);
};

// General options
export const options = {
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
};

export const instance = axios.create({
	options,
});
