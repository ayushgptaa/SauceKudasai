import React from 'react';
import styled from 'styled-components';
import Uploadbtn from '../Uploadbtn';
import { DropZone } from './DropZone/DropZone';

const DropArea = styled.div`
	background: var(--primary);
	width: 90%;
	height: 300px;
	padding: 1rem;
	margin: 1.5em auto;
	text-align: center;
	background: #ffffff;
	box-shadow: 0px 15px 40px 3px rgba(0, 0, 0, 0.25), inset 0px 1px 8px rgba(0, 0, 0, 0.25);
	border-radius: 40px;
	& p {
		font-weight: 600;
		font-size: 0.8rem;
		margin-top: 1rem;
		letter-spacing: 1px;
	}
`;
export const Url = styled.input`
	margin-top: 1rem;
	border: none;
	width: 250px;
	background: #f1880c;
	padding: 0.7rem 3rem;
	border: var(--border);
	font-family: inherit;
	font-weight: 500;
	color: #fff;
	&::placeholder {
		text-align: center;
		font-weight: 700;
		color: inherit;
		letter-spacing: 1px;
	}
`;
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
