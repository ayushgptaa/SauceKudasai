import { useAnilistid, useAnimeinfo, useImagehandler, useUrlhandler } from './Hooks/index';
import Fileupload from './Components/Fileupload';
import Previewimage from './Components/Previewimage';
import Results from './Components/Results';
import { GlobalStyle } from './styles/GlobalStyle';
import Navbar from './Components/Navbar';

function App() {
	const { onChange, image } = useImagehandler(); // Hook that get input image
	const { urlhandler, url } = useUrlhandler(image);
	const { fileUpload, anilistid, loading, video } = useAnilistid(image, url); //  Hook that fetches anilistid from server using tracemoe api
	const info = useAnimeinfo(anilistid, image, url); // Hook that fetches animeinfo with anilistid using Anilist api
	return (
		<div className='App'>
			<GlobalStyle />
			<Navbar></Navbar>
			<Fileupload
				onchange={onChange}
				urlhandler={urlhandler}
				url={url}
				fileUpload={fileUpload}
			/>

			<Previewimage image={image} loading={loading} video={video} url={url} />
			<Results animeinfo={info} />
		</div>
	);
}

export default App;
