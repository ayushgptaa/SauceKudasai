import { useState, useEffect } from 'react';
const useUrlhandler = image => {
	const [url, seturl] = useState();
	useEffect(() => {
		if (image) return seturl('');
	}, [image]);

	const urlhandler = async e => {
		const url = e.target.value;
		if (url) return seturl(url);
	};

	return { urlhandler, url };
};

export default useUrlhandler;
