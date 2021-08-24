/** @format */

import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { GoMarkGithub } from 'react-icons/go';
import { respondTo } from 'styles/mixins';

const Navbar = styled.nav`
	padding: 0.5em 1.5rem;
	background: var(--nav);
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 30px;
	width: 90%;
	margin: auto;
	margin-top: 1rem;
	mix-blend-mode: normal;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

	${respondTo.xs`
		width: 400px;
	`}
	${respondTo.sm`
		width: 450px;
	`}

	${respondTo.lg`
		margin-top: 1.5rem;
		width: 700px;
		padding: 0.8rem 2rem;
	`}
`;

const Title = styled.h1`
	font-size: 1rem;
	font-weight: var(--medium);
	color: #000;

	${respondTo.lg`
		font-size: 1.2rem;
	`}
`;

const index = () => {
	return (
		<>
			<Navbar>
				<Title>SauceKudasai</Title>
				<a
					href="https://github.com/Ayush6968/whats-the-sauce"
					target="_blank"
					rel="noreferrer"
					aria-label="Github link">
					<IconContext.Provider value={{ size: '1.4rem', color: '#000000' }}>
						<GoMarkGithub />
					</IconContext.Provider>
				</a>
			</Navbar>
		</>
	);
};

export default index;
