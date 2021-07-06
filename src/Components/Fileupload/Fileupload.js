/** @format */

import Uploadbtn from '../Uploadbtn/Uploadbtn';
import Dropzone from './DropZone/DropZone';
import { DropArea } from './Fileuploadstyle';

export const Fileupload = ({
	onchange,
	urlhandler,
	url,
	fileUpload,
	image,
	loading,
	video,
}) => {
	return (
		<DropArea>
			{/*
							<Url
								onClick={e => e.stopPropagation()}
								type='url'
								name='url'
								id='url'
								placeholder='Paste image or url'
								pattern='https://.*'
								autoComplete='off'
								onChange={urlhandler}
								value={url}
							/>
	 */}
			<Dropzone
				onchange={onchange}
				image={image}
				loading={loading}
				video={video}
				url={url}
			/>
			<Uploadbtn fileupload={fileUpload} />
		</DropArea>
	);
};

export default Fileupload;
