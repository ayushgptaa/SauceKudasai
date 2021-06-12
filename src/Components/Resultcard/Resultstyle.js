import styled from 'styled-components';

export const Animecard = styled.div`
	position: absolute;
	bottom: 0;
	height: 45vh;
	width: 100vw;
	background: #1d1c1c;
	border-radius: var(--card-radius);
`;

export const Banner = styled.div`
	height: 30%;
	position: relative;
`;
export const Bannerimg = styled.img`
	border-radius: var(--card-radius);
`;

export const Banneroverlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 2;
	border-radius: var(--card-radius);
`;

export const Cover = styled.div`
	width: 120px;
	height: 180px;
	border-radius: 0.25rem;
	position: relative;
	bottom: 1rem;
	left: 1.2rem;
	z-index: var(--zindex-max);
`;

export const Coverimg = styled.img`
	border-radius: inherit;
`;
export const Animedetails = styled.div`
	/* height: 100%;
	border: 1px solid red;
	display: flex;
	gap: 10%; */
	/* justify-content: space-around; */
`;
