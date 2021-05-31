import React from 'react';
import Uploadbtn from '../Uploadbtn/Uploadbtn';
import { DropZone } from './DropZone/DropZone';
import { DropArea } from './Fileuploadstyle';

// const Camerabtn = styled.button`
// 	margin-top: 1rem;
// 	border: none;
// 	width: 250px;
// 	background: #6523ba;
// 	padding: 0.7rem 2rem;
// 	border: var(--border);
// 	font-family: inherit;
// 	font-weight: 700;
// 	color: #fff;
// 	letter-spacing: 1px;
// `;

export const Fileupload = ({ onchange, urlhandler, url, fileUpload, image, loading, video }) => {
	return (
		<DropArea>
			{/* <Dropzone onDrop={onchange} accept='image/*' multiple={false}>
				{({ getRootProps, getInputProps }) => (
					<section>
						<div {...getRootProps()}>
							<PreviewContainer>
								<Previewimage
									image={image}
									loading={loading}
									video={video}
									url={url}
								/>
							</PreviewContainer>

							<input {...getInputProps()} />
							<p>Drag and Drop anywhere to Upload</p>
							<Camerabtn>Upload from camera roll</Camerabtn>
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
							<Uploadbtn fileupload={fileUpload} />
						</div>
					</section>
				)}
			</Dropzone> */}
			<DropZone onchange={onchange} image={image} loading={loading} video={video} url={url} />
			<Uploadbtn fileupload={fileUpload} />
		</DropArea>
	);
};

export default Fileupload;
