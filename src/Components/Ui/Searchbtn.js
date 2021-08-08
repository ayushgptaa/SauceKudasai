/** @format */

import styled from 'styled-components';
import { respondTo } from '../../styles/mixins';
const Search = styled.button`
	border: none;
	padding: 0.8rem 1.7rem;
	background: var(--lavender);
	font-family: inherit;
	font-weight: var(--semi-medium);
	color: #000;
	border-radius: calc(var(--radius) * 2);
	margin-top: 0.5rem;
	letter-spacing: 0;
	font-size: 1rem;
	filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25));
	cursor: ${props => (props.image || props.url ? 'pointer' : 'not-allowed')};

	${respondTo.md`
		margin-top: 0.5rem;
		padding: 0.9rem 2rem;
	`}
	${respondTo.lg`
			margin-top: 0rem;
		font-weight: var(--medium);
		font-size: 1.1rem;
	`}
`;

const Searchbtn = ({ fileupload, image, url }) => {
	return (
		<div>
			<Search onClick={fileupload} type="submit">
				Search
			</Search>
		</div>
	);
};
export default Searchbtn;
