/** @format */

import styled from 'styled-components';
import { css } from 'styled-components';

export const Imagecontainer = styled.div`
	object-fit: cover;
	border-radius: var(--radius);
`;

const breakpoints = {
	xs: '450px',
	sm: '550px',
	tab: '660px',
	md: '750px',
	lg: '900px',
	xl: '1100px',
};

export const respondTo = Object.keys(breakpoints).reduce(
	(accumulator, label) => {
		accumulator[label] = (...args) => css`
			@media (min-width: ${breakpoints[label]}) {
				${css(...args)};
			}
		`;
		return accumulator;
	},
	{}
);
