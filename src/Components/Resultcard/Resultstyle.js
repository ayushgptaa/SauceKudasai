import styled from 'styled-components';

export const Animecard = styled.div`
	position: absolute;
	bottom: 0;
	height: 50%;
	width: 100vw;
	background: var(--cardbg);
	border-radius: var(--card-radius);
`;

export const Banner = styled.div`
	height: 30%;
	position: relative;
	border-radius: var(--card-radius);
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
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 2;
	border-radius: var(--card-radius);
`;

export const Cover = styled.div`
	width: 115px;
	height: 170px;
	border-radius: 0.15rem;
	z-index: 3;
	position: relative;
	bottom: 20px;
`;

export const Coverimg = styled.img`
	border-radius: inherit;
`;
export const Animeinfo = styled.div`
	padding: 0 1rem;
	display: grid;
	grid-template-columns: 120px 1fr;
	gap: 10px;
	height: 180px;
	/* border: 1px solid red; */
`;
export const Animetext = styled.div`
	/* border: 1px solid red; */
	padding-top: 0.5rem;
	color: var(--lavender);
`;

export const Title = styled.h1`
	font-size: 1.2rem;
	font-weight: var(--bold);
`;
export const Details = styled.div`
	margin-top: 0.5rem;
	font-size: 0.6rem;
	display: flex;
	gap: 10px;
	& > h3 {
		font-weight: var(--semi-medium);
	}
`;
export const Summary = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 80px;
	margin-top: 0.7rem;
	overflow: hidden;

	& > p {
		font-size: 0.85rem;
		font-weight: var(--regular);
		letter-spacing: 0.5px;
		line-height: 15px;
	}
`;

export const Links = styled.div`
	font-size: 0.85rem;
	justify-self: flex-start;
	& > li {
		padding-right: 0.6rem;
	}
`;
export const Moreinfo = styled.div`
	border-top: 1px solid rgba(255, 255, 255, 0.35);
	padding: 0.9rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > span {
		font-size: 0.7rem;
	}

	& > div {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		font-weight: var(--semi-bold);
		gap: 6px;
	}
`;
export const StyledLink = styled.a`
	color: var(--Styledlinks);
`;
