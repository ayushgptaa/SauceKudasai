import React, { useEffect, useState } from 'react';

const Previewimage = ({ image, video, loading }) => {
	const [preview, setpreview] = useState(null);
	useEffect(() => {
		if (image) {
			setpreview(URL.createObjectURL(image));
		}
	}, [image]);

	return (
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
