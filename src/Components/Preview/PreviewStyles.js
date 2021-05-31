import styled from 'styled-components';

export const Image = styled.img`
	border-radius: calc(var(--radius) / 2);
`;
export const Uploadimg = styled.img`
	margin-top: 0.6rem;
	height: 65px;
	width: 40px;
`;
export const Uploadtext = styled.div`
	margin: 0;
	font-size: 1rem;
	letter-spacing: 0px;
	font-weight: var(--semi-bold);
	opacity: 80%;

	span {
		color: var(--lightblue);
		cursor: pointer;
	}
`;
export const Video = styled.video`
	border-radius: calc(var(--radius) / 2);
`;
