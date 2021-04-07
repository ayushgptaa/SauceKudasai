import './App.css';
import Fileupload from './Components/Fileupload';
import Uploadbtn from './Components/Uploadbtn';
import Previewimage from './Components/Previewimage';
import useImagehandler from './Hooks/useImagehandler';

function App() {
	const { onChange, imagedata } = useImagehandler(); // Hook that converts input image to data
	return (
		<div className='App'>
			<h1>Whats the sauce </h1>
			<Fileupload onchange={onChange} />
			<Uploadbtn imagedata={imagedata}>Search</Uploadbtn>
			<Previewimage imagedata={imagedata} />
		</div>
	);
}

export default App;
