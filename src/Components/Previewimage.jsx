import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { MdCloudUpload } from 'react-icons/md';

const Image = styled.img`
	border-radius: calc(var(--radius) / 2);
`;
const Iconcontainer = styled.div`
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
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
					<Image src={preview} alt='' onClick={e => e.stopPropagation()} />
				) : (
					<IconContext.Provider value={{ size: '3rem' }}>
						<Iconcontainer>
							<MdCloudUpload />
						</Iconcontainer>
					</IconContext.Provider>
				)
			) : (
				<video autoPlay loop muted src={video}></video>
			)}
		</>
	);
};

export default Previewimage;
