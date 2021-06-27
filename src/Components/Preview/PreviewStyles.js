import styled from 'styled-components';
import { respondTo } from '../../styles/mixins';

export const Image = styled.img`
	border-radius: calc(var(--radius) / 3);
`;
export const Loadingimg = styled(Image)`
	filter: blur(1px);
`;
export const Uploadimg = styled.img`
	margin-top: 0.6rem;
	height: 65px;
	width: 40px;
	opacity: 70%;

	${respondTo.sm`
		height: 80px;
		width: 60px;
	
	`}

	@media (min-width: 900px) {
		margin-top: 1rem;
		height: 80px;
		width: 60px;
		opacity: 70%;
	}
`;
export const Uploadtext = styled.div`
	margin: 0;
	font-size: 0.85rem;
	letter-spacing: 0px;
	font-weight: var(--semi-bold);
	opacity: 80%;

	span {
		color: var(--lightblue);
		cursor: pointer;
	}
	${respondTo.xs`
		font-weight: var(--medium);
		font-size: 1.15rem;
	`}
	${respondTo.sm`
		font-size: 1.3rem;
	`}
		${respondTo.md`
		font-size: 1.5rem;
	`}
	@media (min-width: 900px) {
		font-weight: var(--medium);
		font-size: 1.25rem;
	}
`;
export const Video = styled.video`
	border-radius: calc(var(--radius) / 2);
`;
