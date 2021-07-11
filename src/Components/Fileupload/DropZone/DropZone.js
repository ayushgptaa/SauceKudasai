/** @format */

import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import Previewimage from 'Components/Preview/Previewimage';
import { Imagecontainer, respondTo } from 'styles/mixins';
import { Filebtn } from 'Components/Fileupload/Buttons/Filebtn';
const Dropcontainer = styled.div`
	color: #000;
	box-sizing: border-box;
	height: 75%;
	margin: 0.3rem;
	background: var(--lavenderlight);
	border-radius: 20px;
	user-select: none;
	${respondTo.md`
		height: 77%;
	`}

	${respondTo.lg`
		height: 80%;
		border-radius: 25px;
		margin: 0.8rem 1.5rem;
		margin-top: 0.2rem;
	`}
`;

const PreviewContainer = styled(Imagecontainer)`
	height: 130px;
	width: 210px;
	margin: auto;
	padding-top: 1rem;
	border-radius: calc(var(--radius) / 2);
	/* border: 1px solid red; */
	${respondTo.xs`
		height: 160px;
		width: 280px;
	`}
	${respondTo.sm`
		height: 180px;
		width: 300px;
	`} 
	${respondTo.md`
		height: 200px;
		width: 330px;
	`} 
	@media (min-width: 900px) {
		height: 75%;
		width: 55%;
	}
`;
const DropZone = ({ onchange, image, video, url, loading }) => {
	return (
		<>
			<Dropzone
				onDrop={onchange}
				accept="image/*"
				multiple={false}
				noClick={true}>
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

export default DropZone;
