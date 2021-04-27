import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
	height: 60px;
	background: var(--secondary);
	display: grid;
	place-items: center;
	box-shadow: 0px 3px 19px -2px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
	font-size: clamp(1.5rem, 2vw, 4rem);
`;

const index = () => {
	return (
		<>
			<Navbar>
				<Title>Trace.moe</Title>
			</Navbar>
		</>
	);
};

export default index;
