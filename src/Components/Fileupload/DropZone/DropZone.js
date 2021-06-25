import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import Previewimage from '../../Preview/Previewimage';
import { Imagecontainer } from '../../../styles/mixins';
import { Filebtn } from '../Buttons/Filebtn';
const Dropcontainer = styled.div`
	color: #000;
	box-sizing: border-box;
	height: 75%;
	margin: 0.2rem;
	background: var(--lavenderlight);
	border-radius: 20px;
	user-select: none;

	@media (min-width: 900px) {
		height: 80%;
		border-radius: 25px;
		margin: 0.8rem 1.5rem;
		margin-top: 0.2rem;
	}
`;

const PreviewContainer = styled(Imagecontainer)`
	height: 120px;
	width: 200px;
	margin: auto;
	padding-top: 1rem;
	border-radius: calc(var(--radius) / 2);
	/* border: 1px solid red; */

	@media (min-width: 900px) {
		height: 70%;
		width: 50%;
	}
`;
export const DropZone = ({ onchange, image, video, url, loading }) => {
	return (
		<>
			<Dropzone onDrop={onchange} accept="image/*" multiple={false} noClick={true}>
				{({ getRootProps, getInputProps, open }) => (
					<Dropcontainer {...getRootProps()}>
						<input {...getInputProps()} />
						<PreviewContainer>
							<Previewimage
								image={image}
								loading={loading}
								video={video}
								url={url}
								open={open}
							/>
						</PreviewContainer>
						<Filebtn open={open} />
					</Dropcontainer>
				)}
			</Dropzone>
		</>
	);
};
