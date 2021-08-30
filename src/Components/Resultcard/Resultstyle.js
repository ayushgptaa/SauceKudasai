/** @format */

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { respondTo } from 'styles/mixins';

export const Animecard = styled(motion.div)`
	z-index: 99;
	position: absolute;
	bottom: 0;
	height: 50%;
	width: 100vw;
	background: var(--cardbg);
	border-radius: var(--card-radius);
`;

export const Banner = styled.div`
	background-color: var(--cardbg);
	height: 30%;
	position: relative;
	border-radius: var(--card-radius);
	${respondTo.lg`
	height: 35%;
		`}
`;
export const Bannerimg = styled.img`
	border-radius: var(--card-radius);
	background-color: var(--cardbg);
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
	height: 170px;
	border-radius: 0.2rem;
	z-index: 3;
	position: relative;
	bottom: 30px;

	${respondTo.sm`
	width: 140px;
	height: 200px;
	`}
	${respondTo.tab`
	width: 160px;
	height: 230px;
	bottom: 50px;
	`}

	${respondTo.tab`
	width: 160px;
	height: 230px;
	bottom: 60px;
	`}

	${respondTo.lg`
	width: 180px;
	height: 250px;
	bottom:85px;
	`}
	${respondTo.xl`
	width: 210px;
	height: 270px;
	bottom:90px;
	`}
`;

export const Coverimg = styled.img`
	border-radius: inherit;
`;
export const Animeinfo = styled.div`
	padding: 0 0.8rem;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-column-gap: 10px;
	${respondTo.tab`
	gap: 20px;
	`}
`;
export const Animetext = styled.div`
	padding-top: 0.4rem;
	color: var(--lavender);
`;

export const Title = styled.h1`
	font-size: 1.2rem;
	font-weight: var(--bold);
	${respondTo.md`
	font-size: 1.8rem;
	`}
	${respondTo.lg`
	font-size: 2.3rem;
	`}
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
`;
export const Details = styled.div`
	margin-top: 0.5rem;
	display: flex;
	gap: 10px;
	font-size: 0.65rem;
	${respondTo.tab`
	font-size: 0.7rem;
	margin-top: 0.2rem;
	`}
	${respondTo.lg`
	font-size: 1rem;
	width:60%;
	& > h3 {
		&:nth-child(2) {
			margin-left: 10px;
		}
		&:nth-child(3) {
			margin-left: 10px;
		}
			&:nth-child(4) {
			margin-left: 10px;
		}
	}
	`}
	& > h3 {
		font-weight: var(--semi-medium);
	}
`;
export const Similarity = styled.h3`
	font-weight: var(--semi-medium);
	color: ${props => (props.props > 90 ? '#15f115' : '#c7e423')};
`;
export const Summary = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	margin-top: 0.7rem;
	overflow: hidden;
	${respondTo.tab`
			grid-gap:15px;
	`}

	${respondTo.lg`
		grid-template-columns: 66% 30%;
		grid-gap:45px;
	`}

	& > p {
		display: none;
		font-size: 0.8rem;
		font-weight: var(--regular);
		${respondTo.tab`
			display:block;	
		`}
		${respondTo.md`
			font-size: 0.9rem;
		`}
		${respondTo.lg`
			font-size: 0.9rem;
		`}
		${respondTo.xl`
		font-size: 1.1rem;
		`}
	}
`;
export const Genre = styled.div`
	display: none;
	width: 30%;
	${respondTo.xl`
		// display:block;
		`};
`;
export const Links = styled.div`
	font-size: 0.85rem;
	overflow: hidden;
	${respondTo.lg`
	font-size: 0.9rem;
	`}
	${respondTo.xl`
		font-size: 1.1rem;
		`}
	& > li {
		padding-right: 0.6rem;
		padding-bottom: 0.3rem;
	}
`;
export const Resultfooter = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	border-top: 1px solid rgba(255, 255, 255, 0.25);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.7rem 1rem;

	${respondTo.tab`
		padding: 0.8rem;	
	`}
	${respondTo.lg`
	padding: 0.6rem 1.5rem;
		`}
	& > span {
		font-size: 0.7rem;
	}
`;

export const Moreinfo = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: var(--semi-medium);
	gap: 4px;
	& > span {
		font-size: 0.7rem;
		${respondTo.lg`
		font-size: 1rem;
		`}
	}
`;
export const StyledLink = styled.a`
	color: var(--Styledlinks);
`;
export const Closebtn = styled.div`
	display: grid;
	place-items: center;
	position: absolute;
	top: 0.6rem;
	right: 0.8rem;
	border-radius: 50%;
	height: 25px;
	width: 25px;
	background: rgba(255, 255, 255, 0.7);
	cursor: pointer;
	z-index: 99;
`;
