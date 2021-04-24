import './App.css';

import { useAnilistid, useAnimeinfo, useImagehandler, useUrlhandler } from './Hooks/index';
import Fileupload from './Components/Fileupload';
import Uploadbtn from './Components/Uploadbtn';
import Previewimage from './Components/Previewimage';
import Results from './Components/Results';

function App() {
	const { onChange, image } = useImagehandler(); // Hook that get input image
	const { urlhandler, url } = useUrlhandler(image);
	const { fileUpload, anilistid, loading, video } = useAnilistid(image, url); //  Hook that fetches anilistid from server using tracemoe api
	const info = useAnimeinfo(anilistid, image, url); // Hook that fetches animeinfo with anilistid using Anilist api
	return (
		<div className='App'>
			<h1>Whats the sauce </h1>
			<Fileupload onchange={onChange} urlhandler={urlhandler} url={url} />
			<Uploadbtn fileupload={fileUpload} />
			<Previewimage image={image} loading={loading} video={video} url={url} />
			<Results animeinfo={info} />
		</div>
	);
}

export default App;
