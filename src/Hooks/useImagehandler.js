// This is the the hook for converting input image to Base64 EnCoded Image
import { useState, useEffect } from 'react';
const useImagehandler = () => {
	const [image, setimage] = useState(null);

	const onChange = async acceptedfile => {
		const file = acceptedfile[0];
		if (file && file.type.substr(0, 5) === 'image') return setimage(file);
	};

	return { onChange, image };
};

export default useImagehandler;
