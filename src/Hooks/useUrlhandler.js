import { useState } from 'react';
const useUrlhandler = () => {
	const [url, seturl] = useState(null);
	const urlhandler = async e => {
		console.log('working');
		const url = e.target.value;
		if (url) return seturl(url);
	};

	return { urlhandler, url };
};

export default useUrlhandler;
