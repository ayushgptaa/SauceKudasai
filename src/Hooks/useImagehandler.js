// This is the the hook for converting input image to Base64 EnCoded Image
import { useState, useEffect } from 'react';
const UseImagehandler = () => {
	const [image, setimage] = useState('');
	const [imagedata, setImagedata] = useState('');

	useEffect(() => {
		if (image) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagedata(reader.result);
				return;
			};
			reader.readAsDataURL(image);
		}
		return setImagedata(null);
	}, [image]);

	const onChange = async e => {
		const file = e.target.files[0];
		if (file && file.type.substr(0, 5) === 'image') return setimage(file);
		return setimage(null);
	};

	return { onChange, imagedata };
};

export default UseImagehandler;
