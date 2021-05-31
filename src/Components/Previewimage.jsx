import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { MdCloudUpload } from 'react-icons/md';
import Upload from './images/uploadimg.png';

const Image = styled.img``;
const Iconcontainer = styled.div`
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Uploadimg = styled.img`
	margin-top: 1.3rem;
	height: 65px;
	width: 40px;
`;
const Uploadtext = styled.div`
	margin: 0;
	font-size: 1rem;
	letter-spacing: 0px;
	font-weight: var(--semi-bold);
	opacity: 80%;

	span {
		color: var(--lightblue);
		cursor: poointer;
	}
`;

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
