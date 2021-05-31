import React, { useEffect, useState } from 'react';
import { Image, Uploadimg, Uploadtext } from './PreviewStyles';
import Upload from '../images/uploadimg.png';

const Previewimage = ({ image, video, loading, url, click }) => {
	const [preview, setpreview] = useState(null);

	// This is use to set preview to the image selected by the user
	useEffect(() => {
		if (image) return setpreview(URL.createObjectURL(image));
	}, [image]);

	// This is use to set preview to the url selected by the user
	useEffect(() => {
		if (url) return setpreview(url);
	}, [url]);

	return (
		/* This code Checks first if the the video Exits
			If the video exits the video tag is set to the video
			If the video doesnot exits then it checks if the loading exits
			If loading exits then loading is rendered on the screen otherwise
			preview is rendered */
		<>
			{video === null ? (
				loading ? (
					<p>Loading....</p>
				) : preview ? (
					<Image src={preview} alt='' onClick={e => e.stopPropagation()} />
				) : (
					<>
						<Uploadimg src={Upload} alt='Upload' />
						<Uploadtext>
							Drop your images, <span onClick={click}> browse </span> or import from
						</Uploadtext>
					</>
				)
			) : (
				<video autoPlay loop muted src={video}></video>
			)}
		</>
	);
};

export default Previewimage;
