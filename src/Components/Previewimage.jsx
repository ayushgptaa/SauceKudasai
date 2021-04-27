import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Image = styled.img`
	border-radius: calc(var(--radius) / 2);
`;

const Previewimage = ({ image, video, loading, url }) => {
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
					<Image src={preview} alt='' />
				) : null
			) : (
				<video autoPlay loop muted src={video}></video>
			)}
		</>
	);
};

export default Previewimage;
