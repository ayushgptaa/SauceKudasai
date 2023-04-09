/** @format */

import axios from 'axios';

export const TRACE_MOE_QUERY = 'https://api.trace.moe/search';

export const ANILIST_QUERY = 'https://graphql.anilist.co';

// General options for Axios instance
export const options = {
	headers: {
		'	Accept': 'application/json',
    "x-trace-key": process.env.API_KEY,

	},
};

/**
 * Axios instance
 *any data provided in instance.get will be merged with options
 */
export const instance = axios.create({
	baseURL: TRACE_MOE_QUERY,
	options,
});

// Query data for Anilist GraphQL Api
export const query = `
query ($id: Int) {
 Media (id:$id , type: ANIME) { 
    id
    title {
      english
      native
    }
    description(asHtml:false)
    seasonYear
    coverImage {
      large
    }
    bannerImage
    genres
    externalLinks {
      id
      url
      site
    }
    averageScore
    siteUrl
  }
}

`;
