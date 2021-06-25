import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
	padding: 0.8rem;
	background: var(--nav);
	display: grid;
	place-items: center;
	border-radius: 35px;
	width: 90%;
	margin: auto;
	margin-top: 1rem;
	mix-blend-mode: normal;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
`;

const Title = styled.h1`
	font-size: 1.1rem;
	font-weight: var(--semi-bold);
	color: #000;
`;

const index = () => {
	return (
		<>
			<Navbar>
				<Title>Whatsthesauce</Title>
			</Navbar>
		</>
	);
};

export default index;
