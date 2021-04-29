import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import Uploadbtn from './Uploadbtn';
import Previewimage from './Previewimage';
import { Imagecontainer } from '../styles/mixins';

const DropArea = styled.div`
	background: var(--primary);
	border: 2px solid #fff;
	height: 60vh;
	width: clamp(90%, 60vw, 70%);
	padding: 1rem;
	margin: 2rem auto;
	text-align: center;
`;
const PreviewContainer = styled(Imagecontainer)`
	height: clamp(120px, 8vh, 200px);
	width: clamp(200px, 10vw, 400px);
	margin: auto;
	border-radius: calc(var(--radius) / 2);
`;
export const Url = styled.input`
	border: none;
	width: 250px;
	background: var(--dropzone);
	padding: 0.45rem 3rem;
	background-color: #2a5262;
	border: var(--border);
	font-family: inherit;
	font-weight: 500;
	color: #fff;
	&::placeholder {
		text-align: center;
		font-weight: 800;
		color: inherit;
	}
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
						<p>Drag 'n' drop some files here, or click to select files</p>

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
