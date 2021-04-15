// This is the hook for getting Anime info using anilist id recieved from
import { useEffect } from 'react';
export const useAnimedata = anilistid => {
	useEffect(() => {
		if (anilistid) return console.log(anilistid);
		return null;
	}, [anilistid]);

	if (anilistid) return anilistid;
	return null;
};
