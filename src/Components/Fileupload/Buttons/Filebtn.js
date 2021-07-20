/** @format */

import React from 'react';
import { FiFolderPlus, FiLink2 } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { respondTo } from 'styles/mixins';

const Button = styled.button`
	/* display: grid; */
	border-radius: 50%;
	height: 45px;
	width: 45px;
	border: none;
	background: var(--lavender);
	cursor: pointer;
	margin: 1.4rem 0.5rem 0 0;
	cursor: pointer;
	${respondTo.sm`
		margin: 1rem 0.6rem 0 0;
	`}
	${respondTo.md`
		margin: 0.5rem 0.6rem 0 0;
		height: 40px;
		width: 40px;
	`}
`;

export const Filebtn = ({ open, toggleurl }) => {
	return (
		<>
			<Button onClick={open}>
				<IconContext.Provider
					value={{ size: '1.1rem', color: '#303133' }}>
					<FiFolderPlus />
				</IconContext.Provider>
			</Button>
			<Button onClick={toggleurl}>
				<IconContext.Provider
					value={{ size: '1.1rem', color: '#303133' }}>
					<FiLink2 />
				</IconContext.Provider>
			</Button>
		</>
	);
};
