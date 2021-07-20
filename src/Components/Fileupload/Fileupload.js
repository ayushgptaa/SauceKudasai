/** @format */
import { useState } from 'react';
import Uploadbtn from '../Uploadbtn/Uploadbtn';
import Dropzone from './DropZone/DropZone';
import { DropArea, Url } from './Fileuploadstyle';

export const Fileupload = ({
	onchange,
	urlhandler,
	url,
	fileUpload,
	image,
	loading,
	video,
}) => {
	const toggleurl = () => {
		setShowurl(prevstate => !prevstate);
	};
	const [showurl, setShowurl] = useState(false);
	return (
		<DropArea>
			<Dropzone
				onchange={onchange}
				image={image}
				loading={loading}
				video={video}
				url={url}
				toggleurl={toggleurl}
			/>
			{showurl && (
				<Url
					onClick={e => e.stopPropagation()}
					type="url"
					name="url"
					id="url"
					placeholder="Paste image or url"
					pattern="https://.*"
					autoComplete="off"
					onChange={urlhandler}
					value={url}
				/>
			)}
			<Uploadbtn fileupload={fileUpload} />
		</DropArea>
	);
};

export default Fileupload;
