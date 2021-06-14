import React, { useEffect, useState } from 'react';
import { Image, Loadingimg, Uploadimg, Uploadtext, Video } from './PreviewStyles';
import Upload from '../images/Ei-share-apple.svg';

const Previewimage = ({ image, video, loading, url, click, open }) => {
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
					<Loadingimg src={preview} alt="Loading..."></Loadingimg>
				) : preview ? (
					<Image src={preview} alt="Your image" onClick={e => e.stopPropagation()} />
				) : (
					<>
						<Uploadimg src={Upload} alt="Upload" />
						<Uploadtext>
							Drop your images, <span onClick={open}> browse </span> or import from
						</Uploadtext>
					</>
				)
			) : (
				<Video autoPlay loop muted src={video}></Video>
			)}
		</>
	);
};

export default Previewimage;
