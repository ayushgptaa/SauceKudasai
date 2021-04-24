import { useState, useEffect } from 'react';
const useUrlhandler = image => {
	const [url, seturl] = useState('');
	// if user selects an image or if the image exits the value of url is set to empty
	useEffect(() => {
		if (image) return seturl('');
	}, [image]);

	const urlhandler = async e => {
		const url = e.target.value;
		console.log(url);
		if (url) return seturl(url);
		return seturl('');
	};

	return { urlhandler, url };
};

export default useUrlhandler;
