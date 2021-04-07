import './App.css';
import useImagehandler from './Hooks/UseImagehandler';
import { UseFetchdata } from './Hooks/UseFetchdata';
import Fileupload from './Components/Fileupload';
import Uploadbtn from './Components/Uploadbtn';
import Previewimage from './Components/Previewimage';
import Results from './Components/Results';

function App() {
	const { onChange, imagedata } = useImagehandler(); // Hook that converts input image to data
	const { fileUpload, apidata } = UseFetchdata(imagedata);
	return (
		<div className='App'>
			<h1>Whats the sauce </h1>
			<Fileupload onchange={onChange} />
			<Uploadbtn fileupload={fileUpload}>Search</Uploadbtn>
			<Previewimage imagedata={imagedata} />
			<Results apidata={apidata} />
		</div>
	);
}

export default App;
