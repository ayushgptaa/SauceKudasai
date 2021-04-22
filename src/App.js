import './App.css';
import useImagehandler from './Hooks/useImagehandler';
import { useAnilistid } from './Hooks/useAnilistid';
import Fileupload from './Components/Fileupload';
import Uploadbtn from './Components/Uploadbtn';
import Previewimage from './Components/Previewimage';
import Results from './Components/Results';
import { useAnimeinfo } from './Hooks/useanimeinfo';
import useUrlhandler from './Hooks/useUrlhandler';

function App() {
	const { onChange, image } = useImagehandler(); // Hook that get input image
	const { urlhandler } = useUrlhandler();
	const { fileUpload, anilistid, loading, video } = useAnilistid(image); //  Hook that fetches anilistid from server using tracemoe api
	const info = useAnimeinfo(anilistid, image); // Hook that fetches animeinfo with anilistid using Anilist api
	return (
		<div className='App'>
			<h1>Whats the sauce </h1>
			<Fileupload onchange={onChange} urlhandler={urlhandler} />
			<Uploadbtn fileupload={fileUpload} />
			<Previewimage image={image} loading={loading} video={video} />
			<Results apidata={info} />
		</div>
	);
}

export default App;
