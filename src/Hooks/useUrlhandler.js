// This is the the hook for getting the image from input
// import { useState } from 'react';
const useUrlhandler = () => {
	// const [url, seturl] = useState(null);

	const urlhandler = async e => {
		console.log('working');
		const url = e.target.value;
		if (url) return console.log(url);
	};

	return { urlhandler };
};

export default useUrlhandler;
