import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
	letter-spacing: 0;
	width: 100%;
	text-align: center;
	position: absolute;
	bottom: 0.5rem;
	font-size: 1rem;
	color: #000;
	font-weight: var(--semi-bold);

	a {
		color: var(--link);
	}
`;
export const Footertext = () => {
	return (
		<Footer>
			<p>
				Powered by &nbsp;
				<a href='https://github.com/soruly/trace.moe' target='_blank' rel='noreferrer'>
					trace.moe api
				</a>
			</p>
		</Footer>
	);
};