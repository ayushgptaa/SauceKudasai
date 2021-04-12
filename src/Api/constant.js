import axios from 'axios';

export const TRACE_MOE_QUERY = 'https://trace.moe/api/search';

export const ANILIST_QUERY = 'https://graphql.anilist.co';

// General options for Axios instance
export const options = {
	headers: {
		'Content-Type': 'application/json',
		'	Accept': 'application/json',
	},
};

/**
 * Axios instance
 * This is created so that we font to repeat axios.get
 *any data provided in instance.get will be merged with options
 */
export const instance = axios.create({
	options,
});

// Query data for Anilist GraphQL Api
export const query = `
query ($id: Int) {
  Media (id:$id, type: ANIME) { 
    title {
      romaji
      english
      native
    }
    status
    description(asHtml:false)
    season
    seasonYear
    episodes
    trailer {
      id
    }
    coverImage {
      large
      medium
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
