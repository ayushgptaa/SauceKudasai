import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import Uploadbtn from './Uploadbtn';

const DropArea = styled.div`
	border: 2px dashed var(--border);
	height: 200px;
	width: 90%;
	border-radius: var(--radius);
	padding: 2rem;
	margin: 2rem auto;
	text-align: center;
`;
export const Fileupload = ({ onchange, urlhandler, url, fileUpload }) => {
	return (
		<Dropzone onDrop={onchange} accept='image/*' multiple={false}>
			{({ getRootProps, getInputProps }) => (
				<section>
					<DropArea {...getRootProps()}>
						<input {...getInputProps()} />
						<p>Drag 'n' drop some files here, or click to select files</p>
						{/* <button type='button' onClick={open}>
							Open File Dialog
						</button> */}
						<input
							onClick={e => e.stopPropagation()}
							type='url'
							name='url'
							id='url'
							placeholder='Enter the url'
							pattern='https://.*'
							autoComplete='off'
							onChange={urlhandler}
							value={url}
						/>
						<Uploadbtn fileupload={fileUpload} />
					</DropArea>
				</section>
			)}
		</Dropzone>
	);
};

export default Fileupload;
