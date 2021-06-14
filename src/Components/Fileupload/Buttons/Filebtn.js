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
	margin: 0.5rem 0.3rem 0;
	cursor: pointer;
`;

export const Filebtn = () => {
	return (
		<>
			<Button>
				<IconContext.Provider value={{ size: '1.5rem', color: '#303133' }}>
					<FiFolderPlus />
				</IconContext.Provider>
			</Button>
			<Button>
				<IconContext.Provider value={{ size: '1.5rem', color: '#303133' }}>
					<FiLink2 />
				</IconContext.Provider>
			</Button>
		</>
	);
};
