import './App.css';
import useImagehandler from './Hooks/useImagehandler';
import { useAnilistid } from './Hooks/useAnilistid';
import Fileupload from './Components/Fileupload';
import Uploadbtn from './Components/Uploadbtn';
import Previewimage from './Components/Previewimage';
import Results from './Components/Results';
import { useAnimeinfo } from './Hooks/useanimeinfo';

function App() {
	const { onChange, imagedata } = useImagehandler(); // Hook that converts input image to data
	const { fileUpload, anilistid, loading, video } = useAnilistid(imagedata); // Hook that fetches data from server
	const info = useAnimeinfo(anilistid, imagedata);
	return (
		<div className='App'>
			<h1>Whats the sauce </h1>
			<Fileupload onchange={onChange} />
			<Uploadbtn fileupload={fileUpload} />
			<Previewimage imagedata={imagedata} loading={loading} video={video} />
			<Results apidata={info} />
		</div>
	);
}

export default App;
