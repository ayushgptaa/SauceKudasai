import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
	height: 50px;
	background: var(--secondary);
	display: grid;
	place-items: center;
	background: var(--nav);
	background: #ffffff;
	border-radius: 35px;
	width: 50vw;
	margin: auto;
	margin-top: 3rem;
`;

const Title = styled.h1`
	font-size: 1.3rem;
	font-weight: 600;
	color: #000;
`;

const index = () => {
	return (
		<>
			<Navbar>
				<Title>trace.moe</Title>
			</Navbar>
		</>
	);
};

export default index;
