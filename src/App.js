import './App.css';
import useImagehandler from './Hooks/useImagehandler';
import { useFetchdata } from './Hooks/UseFetchdata';
import Fileupload from './Components/Fileupload';
import Uploadbtn from './Components/Uploadbtn';
import Previewimage from './Components/Previewimage';
// import Results from './Components/Results';
import { useAnimedata } from './Hooks/useanimeinfo';

function App() {
	const { onChange, imagedata } = useImagehandler(); // Hook that converts input image to data
	const { fileUpload, apidata } = useFetchdata(imagedata); // Hook that fetches data from server
	const info = useAnimedata(apidata);
	return (
		<div className='App'>
			<h1>Whats the sauce </h1>
			<Fileupload onchange={onChange} />
			<Uploadbtn fileupload={fileUpload} />
			<Previewimage imagedata={imagedata} />
			{/* <Results apidata={apidata} /> */}
			{console.log('anilist id is', info)}
			{console.log('useless rendering')}
		</div>
	);
}

export default App;
