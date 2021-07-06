/** @format */

import Upload from '../../images/Ei-share-apple.svg';
import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins';

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
	font-size: 0==9rem;
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

export const Uploadinfo = ({ open }) => {
	return (
		<>
			<Uploadimg src={Upload} alt="Upload" />
			<Uploadtext>
				Drop your images, <span onClick={open}> browse </span> or import
				from
			</Uploadtext>
		</>
	);
};
