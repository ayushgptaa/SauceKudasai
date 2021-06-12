import styled from 'styled-components';

export const Animecard = styled.div`
	position: absolute;
	bottom: 0;
	height: 43vh;
	width: 100vw;
	background: #0a0a0a;
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
	width: 115px;
	border-radius: 0.25rem;
	z-index: var(--zindex-max);
	position: relative;
	bottom: 20px;
`;

export const Coverimg = styled.img`
	border-radius: inherit;
`;
export const Animeinfo = styled.div`
	padding: 0 1rem;
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 10px;
`;
export const Animetext = styled.div`
	/* border: 1px solid red; */
	padding-top: 0.5rem;
	color: var(--lavender);
`;

export const Title = styled.h1`
	font-size: 1.2rem;
	font-weight: var(--medium);
`;
export const Details = styled.div`
	margin-top: 0.7rem;
	font-size: 0.6rem;
	/* border: 1px solid red; */
	display: flex;
	gap: 10px;
	& > h3 {
		font-weight: var(--semi-medium);
	}
`;
export const Summary = styled.div`
	/* border: 1px solid red; */
	display: flex;
	margin-top: 0.7rem;
	/* justify-content: space-between; */

	& > p {
		font-size: 0.7rem;
		font-weight: var(--regular);
		letter-spacing: 0.5px;
		line-height: 15px;
		width: 65%;
		/* border: 1px solid red; */
	}
`;

export const Links = styled.div`
	margin-left: 10px;
	font-size: 0.7rem;
`;
