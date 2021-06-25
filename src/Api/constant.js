import axios from 'axios';

export const TRACE_MOE_QUERY = 'https://api.trace.moe/search';

export const ANILIST_QUERY = 'https://graphql.anilist.co';

// General options for Axios instance
export const options = {
	headers: {
		'	Accept': 'application/json',
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
  Media (id:$id, type: ANIME) { 
    title {
      english
      native
    }
    description(asHtml:false)
    seasonYear
    trailer {
      id
    }
    coverImage {
      large
      color
    }
    bannerImage
    externalLinks {
      id
      url
      site
    }
    averageScore
  }
}

`;
