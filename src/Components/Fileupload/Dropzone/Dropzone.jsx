import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
// import Previewimage from '../Previewimage';
const style = {
	border: '1px solid red',
	color: 'black',
};
export const Dropzone = ({ onchange, image, video, url, loading }) => {
	const onDrop = useCallback(acceptedFiles => {
		// Do something with the files
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	return (
		<>
			<div {...getRootProps()} style={style}>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : (
					<p>Drag 'n' drop some files here, or click to select files</p>
				)}
			</div>
		</>
	);
};
