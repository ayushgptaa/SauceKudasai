import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const Dropcontainer = styled.div`
	/* 
	background: var(--lavenderlight);
	color: black;
	border-radius: 10px;
	border: 2px dashed red; */
	box-sizing: border-box;
	height: 75%;
	margin: 0.5rem;
	background: #f0f3ff;
	background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='17' ry='17' stroke='%23CACAE6FF' stroke-width='5' stroke-dasharray='8%2c15' stroke-dashoffset='13' stroke-linecap='square'/%3e%3c/svg%3e");
	border-radius: 17px;
`;

export const DropZone = ({ onchange, image, video, url, loading }) => {
	return (
		<>
			<Dropzone onDrop={onchange} accept='image/*' multiple={false}>
				{({ getRootProps, getInputProps }) => (
					<Dropcontainer {...getRootProps()}>
						<input {...getInputProps()} />
						{/* <p>Drag 'n' drop some files here, or click to select files</p> */}
					</Dropcontainer>
				)}
			</Dropzone>
		</>
	);
};
