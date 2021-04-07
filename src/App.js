import './App.css';
import Fileupload from './Components/Fileupload';
import Uploadbtn from './Components/Uploadbtn';
import Previewimage from './Components/Previewimage';
import useImagehandler from './Hooks/useImagehandler';
import { UseFetchdata } from './Hooks/UseFetchdata';

function App() {
	const { onChange, imagedata } = useImagehandler(); // Hook that converts input image to data
	const { fileUpload, apidata } = UseFetchdata(imagedata);
	return (
		<div className='App'>
			<h1>Whats the sauce </h1>
			<Fileupload onchange={onChange} />
			<Uploadbtn fileupload={fileUpload}>Search</Uploadbtn>
			<Previewimage imagedata={imagedata} />
			{console.log(apidata)}
		</div>
	);
}

export default App;
