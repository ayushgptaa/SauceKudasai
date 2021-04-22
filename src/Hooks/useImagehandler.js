// This is the the hook for getting the image from input
import { useState } from 'react';
const useImagehandler = () => {
	const [image, setimage] = useState(null);

	const onChange = async acceptedfile => {
		const file = acceptedfile[0];
		if (file && file.type.substr(0, 5) === 'image') return setimage(file);
	};

	return { onChange, image };
};

export default useImagehandler;
