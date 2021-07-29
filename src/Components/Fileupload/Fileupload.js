/** @format */
import { useState } from 'react';
import Searchbtn from '../Ui/Searchbtn';
import Dropzone from './DropZone/DropZone';
import { DropArea } from './Fileuploadstyle';

export const Fileupload = ({ onchange, urlhandler, url, fileUpload, image, loading, video }) => {
	const [showurl, setShowurl] = useState(false);
	const toggleurl = () => {
		setShowurl(prevstate => !prevstate);
	};

	return (
		<DropArea>
			<Dropzone
				onchange={onchange}
				image={image}
				loading={loading}
				video={video}
				url={url}
				showurl={showurl}
				urlhandler={urlhandler}
				toggleurl={toggleurl}
			/>

			<Searchbtn image={image} url={url} fileupload={fileUpload} />
		</DropArea>
	);
};

export default Fileupload;
