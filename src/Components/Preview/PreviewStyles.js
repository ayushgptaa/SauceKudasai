/** @format */

import styled from 'styled-components';

export const Image = styled.img`
	border-radius: calc(var(--radius) / 3);
`;
export const Loadingimg = styled(Image)`
	filter: blur(2.5px);
`;

export const Video = styled.video`
	border-radius: calc(var(--radius) / 2);
`;

export const Mutebtn = styled.button`
	background: transparent;
	position: absolute;
	right: 6px;
	bottom: 5px;
`;
