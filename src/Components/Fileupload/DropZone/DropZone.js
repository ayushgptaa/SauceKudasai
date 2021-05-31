import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import Upload from '../../images/uploadimg.png';

const Dropcontainer = styled.div`
	color: #000;
	height: 75%;
	margin: 0.5rem;
	background: var(--lavenderlight);
	background-color: #f0f3ff;
	background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='17' ry='17' stroke='%23CACAE6FF' stroke-width='5' stroke-dasharray='6%2c12' stroke-dashoffset='13' stroke-linecap='square'/%3e%3c/svg%3e");
	border-radius: 17px;
	border-radius: 17px;
`;
const Uploadimg = styled.img`
	margin-top: 0.5rem;
	height: 70px;
	width: 50px;
`;
const Uploadtext = styled.div`
	margin: 0;
	font-size: 1rem;
	letter-spacing: 0px;
	font-weight: var(--semi-bold);
	opacity: 80%;

	span {
		color: var(--lightblue);
		cursor: poointer;
	}
`;

export const DropZone = ({ onchange, image, video, url, loading }) => {
	return (
		<>
			<Dropzone onDrop={onchange} accept='image/*' multiple={false}>
				{({ getRootProps, getInputProps, click }) => (
					<Dropcontainer {...getRootProps()}>
						<input {...getInputProps()} />
						<Uploadimg src={Upload} alt='Upload' />
						<Uploadtext>
							Drop your images, <span onClick={click}> browse </span> or import from
						</Uploadtext>
					</Dropcontainer>
				)}
			</Dropzone>
		</>
	);
};
