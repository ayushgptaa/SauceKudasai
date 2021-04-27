import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import Uploadbtn from './Uploadbtn';
import Previewimage from './Previewimage';
import { Imagecontainer } from '../styles/mixins';

const DropArea = styled.div`
	border: 2px dashed var(--border);
	height: 200px;
	width: 90%;
	border-radius: var(--radius);
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
export const Fileupload = ({ onchange, urlhandler, url, fileUpload, image, loading, video }) => {
	return (
		<Dropzone onDrop={onchange} accept='image/*' multiple={false}>
			{({ getRootProps, getInputProps }) => (
				<section>
					<DropArea {...getRootProps()}>
						{image ? (
							<PreviewContainer onClick={e => e.stopPropagation()}>
								<Previewimage
									image={image}
									loading={loading}
									video={video}
									url={url}
								/>
							</PreviewContainer>
						) : null}

						<input {...getInputProps()} />
						<p>Drag 'n' drop some files here, or click to select files</p>

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
