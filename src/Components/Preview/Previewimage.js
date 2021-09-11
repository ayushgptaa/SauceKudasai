/** @format */

import React, { useEffect, useState, useContext } from 'react';
import { Loader } from 'Components/Ui/loader';
import { Image, Loadingimg, Video, Mutebtn } from './PreviewStyles';
import { Uploadinfo } from 'Components/Ui/Uploadinfo/Uploadinfo';
import { Context } from 'store/Context-Provider';
import { IconContext } from 'react-icons';
import { GoUnmute, GoMute } from 'react-icons/go';

const Previewimage = ({ open }) => {
	const ctx = useContext(Context);
	const { image, url, loading, video } = ctx;
	const [preview, setpreview] = useState(null);
	const [mute, setmute] = useState(true);
	const mutehandler = () => {
		setmute(prevstate => !prevstate);
	};
	// This is use to set preview to the image selected by the user
	useEffect(() => {
		if (image) return setpreview(URL.createObjectURL(image));
		setmute(true);
	}, [image]);

	// This is use to set preview to the url selected by the user
	useEffect(() => {
		if (url) setpreview(url);
		setmute(true);
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
					<Image src={preview} alt="Your Search image" onClick={e => e.stopPropagation()} />
				) : (
					<Uploadinfo open={open} />
				)
			) : (
				<>
					<Video autoPlay loop muted={mute} src={video}></Video>
					<Mutebtn onClick={mutehandler}>
						{mute ? (
							<IconContext.Provider value={{ size: '1.3rem', color: '#d9d9f9' }}>
								<GoMute></GoMute>
							</IconContext.Provider>
						) : (
							<IconContext.Provider value={{ size: '1.3rem', color: '#d9d9f9' }}>
								<GoUnmute></GoUnmute>
							</IconContext.Provider>
						)}
					</Mutebtn>
				</>
			)}
		</>
	);
};

export default Previewimage;
