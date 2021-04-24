import React, { useEffect, useState } from 'react';

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
		<div>
			{video === null ? (
				loading ? (
					<p>Loading....</p>
				) : (
					<div className='image-container'>
						{preview ? <img src={preview} alt='' /> : <p>no image selected</p>}
					</div>
				)
			) : (
				<video autoPlay loop muted src={video}></video>
			)}
		</div>
	);
};

export default Previewimage;
