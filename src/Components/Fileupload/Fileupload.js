/** @format */
import { useState } from 'react';
import Uploadbtn from '../Uploadbtn/Uploadbtn';
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

			<Uploadbtn fileupload={fileUpload} />
		</DropArea>
	);
};

export default Fileupload;
