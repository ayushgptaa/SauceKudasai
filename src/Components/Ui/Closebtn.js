/** @format */

import React from 'react';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';

const CloseBtn = styled.div`
	display: grid;
	place-items: center;
	position: absolute;
	top: 0.6rem;
	right: 0.8rem;
	border-radius: 50%;
	height: 25px;
	width: 25px;
	background: rgba(255, 255, 255, 0.7);
	cursor: pointer;
	z-index: 99;
`;
export const Closebtn = ({ onClick }) => {
	return (
		<CloseBtn onClick={onClick}>
			<IoMdClose color={'black'} size={20} />
		</CloseBtn>
	);
};
