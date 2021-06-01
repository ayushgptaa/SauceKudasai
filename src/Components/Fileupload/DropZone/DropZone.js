import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import Previewimage from '../../Preview/Previewimage';
import { Imagecontainer } from '../../../styles/mixins';
import { Filebtn } from '../Buttons/Filebtn';
const Dropcontainer = styled.div`
	color: #000;
	height: 75%;
	margin: 0.5rem;
	background: var(--lavenderlight);
	/* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='17' ry='17' stroke='%23DADAE6FF' stroke-width='4' stroke-dasharray='6%2c12' stroke-dashoffset='13' stroke-linecap='square'/%3e%3c/svg%3e"); */
	border-radius: 17px;
`;

const PreviewContainer = styled(Imagecontainer)`
	height: clamp(130px, 8vh, 200px);
	width: clamp(220px, 10vw, 400px);
	margin: auto;
	padding-top: 1rem;
	border-radius: calc(var(--radius) / 2);
`;
export const DropZone = ({ onchange, image, video, url, loading }) => {
	return (
		<>
			<Dropzone onDrop={onchange} accept='image/*' multiple={false}>
				{({ getRootProps, getInputProps, click }) => (
					<Dropcontainer {...getRootProps()}>
						<input {...getInputProps()} />
						<PreviewContainer>
							<Previewimage
								image={image}
								loading={loading}
								video={video}
								url={url}
								click={click}
							/>
						</PreviewContainer>
						<Filebtn />
					</Dropcontainer>
				)}
			</Dropzone>
		</>
	);
};
