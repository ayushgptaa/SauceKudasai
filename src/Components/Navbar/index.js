import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
	height: 50px;
	background: var(--secondary);
	display: grid;
	place-items: center;
	background: var(--nav);
`;

const Title = styled.h1`
	font-size: clamp(1.5rem, 2vw, 4rem);
	font-weight: 900;
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
