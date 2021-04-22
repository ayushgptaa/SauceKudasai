import React from 'react';
import Dropzone from 'react-dropzone';

export const Fileupload = ({ onchange, urlhandler }) => {
	return (
		<>
			<Dropzone onDrop={onchange} accept='image/*' multiple={false}>
				{({ getRootProps, getInputProps, open }) => (
					<section>
						<div {...getRootProps()}>
							<input {...getInputProps()} />
							<p>Drag 'n' drop some files here, or click to select files</p>
						</div>
						<button type='button' onClick={open}>
							Open File Dialog
						</button>
					</section>
				)}
			</Dropzone>
			<input
				type='url'
				name='url'
				id='url'
				placeholder='Enter the url'
				pattern='https://.*'
				required
				autoComplete='off'
				list=''
				onChange={urlhandler}
			/>
		</>
	);
};

export default Fileupload;
