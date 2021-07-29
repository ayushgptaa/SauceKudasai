/** @format */

import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
	letter-spacing: 0;
	width: 100%;
	text-align: center;
	position: absolute;
	bottom: 0.5rem;
	font-size: 0.8rem;
	color: #000;
	font-weight: var(--semi-bold);

	a {
		color: var(--link);
	}
	@media (min-width: 500px) {
		font-size: 1.15rem;
		font-weight: var(--medium);
	}
`;
export const Footertext = () => {
	return (
		<Footer>
			<p>
				Powered by &nbsp;
				<a href="https://github.com/soruly/trace.moe" target="_blank" rel="noreferrer">
					trace.moe
				</a>
			</p>
		</Footer>
	);
};
