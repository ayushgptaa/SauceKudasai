/** @format */

import React, { useEffect, useState } from 'react';
import { Loader } from 'Components/Ui/loader';
import { Image, Loadingimg, Video, Mutebtn } from './PreviewStyles';
import { Uploadinfo } from 'Components/Ui/Uploadinfo/Uploadinfo';

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
					<>
						<Loadingimg src={preview} alt="Loading..." />
						<Loader />
					</>
				) : preview ? (
					<Image src={preview} alt="Your image" onClick={e => e.stopPropagation()} />
				) : (
					<Uploadinfo open={open} />
				)
			) : (
				<>
					<Video autoPlay loop muted={true} src={video}></Video>
				</>
			)}
		</>
	);
};

export default Previewimage;
