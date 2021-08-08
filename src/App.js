/** @format */

import { useEffect, useContext } from 'react';
import { useAnilistid, useAnimeinfo } from 'Hooks/index';
import Fileupload from 'Components/Fileupload/Fileupload';
import Results from 'Components/Resultcard/Results';
import { GlobalStyle } from 'styles/GlobalStyle';
import Navbar from 'Components/Navbar';
import { Footertext } from 'Components/Footer/Footertext';
import { Context } from 'store/Context-Provider';

function App() {
	const ctx = useContext(Context);
	const { url } = ctx;
	useEffect(() => {
		document.body.style.height = window.innerHeight + 'px';
		const setheight = () => {
			document.body.style.height = window.innerHeight + 'px';
		};
		window.addEventListener('resize', setheight);

		return () => {
			window.removeEventListener('resize', setheight);
		};
	}, []);

	const { fileUpload, anilistid, loading, video, time, episode } = useAnilistid(ctx.image, url); //  Hook that fetches anilistid from server using tracemoe api
	const { animeinfo, setanimeinfo } = useAnimeinfo(anilistid, ctx.image, url); // Hook that fetches animeinfo with anilistid using Anilist api

	return (
		<div className="App">
			<GlobalStyle />
			<Navbar />
			<Fileupload fileUpload={fileUpload} loading={loading} video={video} />
			<Footertext />
			<Results animeinfo={animeinfo} time={time} episode={episode} setanimeinfo={setanimeinfo} />
		</div>
	);
}

export default App;
