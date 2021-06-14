import React from 'react';
import { FiFolderPlus, FiLink2 } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

const Button = styled.button`
	border-radius: 50%;
	height: 40px;
	width: 40px;
	border: none;
	background: var(--lavender);
	cursor: pointer;
	margin: 1.2rem 0.3rem 0 0;
	cursor: pointer;
`;

export const Filebtn = ({ open }) => {
	return (
		<>
			<Button onClick={open}>
				<IconContext.Provider value={{ size: '1.3rem', color: '#303133' }}>
					<FiFolderPlus />
				</IconContext.Provider>
			</Button>
			<Button>
				<IconContext.Provider value={{ size: '1.3rem', color: '#303133' }}>
					<FiLink2 />
				</IconContext.Provider>
			</Button>
		</>
	);
};
