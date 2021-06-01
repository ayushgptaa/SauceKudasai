import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
	height: 50px;
	background: var(--lavender);
	display: grid;
	place-items: center;
	border-radius: 35px;
	width: 90%;
	margin: auto;
	margin-top: 2rem;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
	font-size: 1.3rem;
	font-weight: var(--semi-bold);
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
