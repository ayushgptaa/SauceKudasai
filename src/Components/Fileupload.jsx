import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const DropArea = styled.div`
	border: 1px dashed #fff;
	height: 200px;
	width: 400px;
	border-radius: var(--radius);
`;
export const Fileupload = ({ onchange, urlhandler, url }) => {
	return (
		<>
			<Dropzone onDrop={onchange} accept='image/*' multiple={false}>
				{({ getRootProps, getInputProps, open }) => (
					<section>
						<DropArea {...getRootProps()}>
							<input {...getInputProps()} />
							<p>Drag 'n' drop some files here, or click to select files</p>
							<button type='button' onClick={open}>
								Open File Dialog
							</button>
							<input
								type='url'
								name='url'
								id='url'
								placeholder='Enter the url'
								pattern='https://.*'
								autoComplete='off'
								onChange={urlhandler}
								value={url}
							/>
						</DropArea>
					</section>
				)}
			</Dropzone>
		</>
	);
};

export default Fileupload;
