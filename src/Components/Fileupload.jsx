import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import Uploadbtn from './Uploadbtn';
import Previewimage from './Previewimage';
import { Imagecontainer } from '../styles/mixins';

const DropArea = styled.div`
	background: var(--primary);
	border: 2px solid #fff;
	width: clamp(90%, 60vw, 70%);
	padding: 1rem;
	margin: 2rem auto;
	text-align: center;
	& p {
		font-weight: 600;
		font-size: 0.8rem;
		margin-top: 1rem;
		letter-spacing: 1px;
	}
`;
const PreviewContainer = styled(Imagecontainer)`
	height: clamp(150px, 8vh, 200px);
	width: clamp(250px, 10vw, 400px);
	margin: auto;
	border-radius: calc(var(--radius) / 2);
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
const Camerabtn = styled.button`
	margin-top: 1rem;
	border: none;
	width: 250px;
	background: #6523ba;
	padding: 0.7rem 2rem;
	border: var(--border);
	font-family: inherit;
	font-weight: 700;
	color: #fff;
	letter-spacing: 1px;
`;

export const Fileupload = ({ onchange, urlhandler, url, fileUpload, image, loading, video }) => {
	return (
		<Dropzone onDrop={onchange} accept='image/*' multiple={false}>
			{({ getRootProps, getInputProps }) => (
				<section>
					<DropArea {...getRootProps()}>
						<PreviewContainer>
							<Previewimage image={image} loading={loading} video={video} url={url} />
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
					</DropArea>
				</section>
			)}
		</Dropzone>
	);
};

export default Fileupload;
