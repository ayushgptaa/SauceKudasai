/** @format */
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { respondTo } from '../../styles/mixins';
import { Context } from 'store/Context-Provider';

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
		font-weight: var(--semi-medium);
		font-size: 1.1rem;
	`}
`;

const Searchbtn = () => {
	const [disable, setdisable] = useState(true);
	const ctx = useContext(Context);
	const { image, url, fileUpload } = ctx;
	useEffect(() => {
		if (image || url) return setdisable(false);
	}, [image, url]);

	return (
		<div>
			<Search onClick={fileUpload} type="submit" disabled={disable} image={image} url={url}>
				Search
			</Search>
		</div>
	);
};
export default Searchbtn;
