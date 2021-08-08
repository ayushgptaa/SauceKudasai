/** @format */
import { useState } from 'react';
import Searchbtn from '../Ui/Searchbtn';
import Dropzone from './DropZone/DropZone';
import { DropArea } from './Fileuploadstyle';

export const Fileupload = ({ loading, video }) => {
	const [showurl, setShowurl] = useState(false);
	const toggleurl = () => {
		setShowurl(prevstate => !prevstate);
	};

	return (
		<DropArea>
			<Dropzone loading={loading} video={video} showurl={showurl} toggleurl={toggleurl} />
			<Searchbtn />
		</DropArea>
	);
};

export default Fileupload;
