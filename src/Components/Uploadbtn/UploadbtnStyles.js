/** @format */

import styled from 'styled-components';
import { respondTo } from '../../styles/mixins';

export const SearchBtn = styled.button`
	border: none;
	padding: 0.8rem 1.7rem;
	background: var(--lavender);
	font-family: inherit;
	font-weight: var(--semi-medium);
	color: #000;
	border-radius: calc(var(--radius) * 2);
	margin-top: 0.7rem;
	letter-spacing: 0;
	font-size: 1rem;
	filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25));

	${respondTo.md`
		margin-top: 0.3rem;
		padding: 0.7rem 1.8rem;
	`}
	${respondTo.lg`
		font-weight: var(--medium);
	`}
`;
