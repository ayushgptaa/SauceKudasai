/** @format */
import { useState } from 'react';
import Searchbtn from '../Ui/Searchbtn';
import Dropzone from './DropZone/DropZone';
import { Container } from './Fileuploadstyle';

export const Fileupload = () => {
	const [showurl, setShowurl] = useState(false);
	const toggleurl = () => {
		setShowurl(prevstate => !prevstate);
	};

	return (
		<Container>
			<Dropzone showurl={showurl} toggleurl={toggleurl} />
			<Searchbtn />
		</Container>
	);
};

export default Fileupload;
