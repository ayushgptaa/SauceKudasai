import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
	padding: 0.8rem;
	background: white;
	display: grid;
	place-items: center;
	border-radius: 35px;
	width: 90%;
	margin: auto;
	margin-top: 1rem;
`;

const Title = styled.h1`
	font-size: 1.3rem;
	font-weight: var(--medium);
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
