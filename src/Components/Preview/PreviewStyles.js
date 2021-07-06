/** @format */

import styled from 'styled-components';
import { respondTo } from '../../styles/mixins';

export const Image = styled.img`
	border-radius: calc(var(--radius) / 3);
`;
export const Loadingimg = styled(Image)`
	filter: blur(1px);
`;
export const Uploadimg = styled.img`
	height: 65px;
	width: 40px;
	opacity: 70%;

	${respondTo.sm`
		height: 80px;
		width: 60px;
	
	`}

	${respondTo.lg`{
		margin-top: 0.5rem;
		height: 80px;
		width: 60px;
		opacity: 70%;
	`}
`;
export const Uploadtext = styled.div`
	margin: 0;
	font-size: 1rem;
	letter-spacing: 0px;
	font-weight: var(--medium);
	opacity: 80%;

	span {
		color: var(--lightblue);
		cursor: pointer;
	}
	${respondTo.xs`
		font-size: 1.1rem;
	`}
	${respondTo.md`
		font-size: 1.3rem;
	`}
	${respondTo.lg`
		font-weight: var(--medium);
		font-size: 1.2rem;
	`}
`;
export const Video = styled.video`
	border-radius: calc(var(--radius) / 2);
`;
