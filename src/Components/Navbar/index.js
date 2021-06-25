import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
	padding: 0.8rem;
	background: var(--nav);
	display: flex;
	border-radius: 35px;
	width: 90%;
	margin: auto;
	margin-top: 1rem;
	mix-blend-mode: normal;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

	@media (min-width: 900px) {
		margin-top: 3rem;
		width: 600px;
	}
`;

const Title = styled.h1`
	font-size: 1.24rem;
	font-weight: var(--medium);
	color: #000;
`;

const index = () => {
	return (
		<>
			<Navbar>
				<Title>WhatstheSauce</Title>
			</Navbar>
		</>
	);
};

export default index;
