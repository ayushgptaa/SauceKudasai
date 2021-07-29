/** @format */

import styled from 'styled-components';

const Url = styled.input`
	position: absolute;
	border: none;
	outline: none;
	width: 250px;
	background: var(--lavender);
	padding: 0.7rem 3rem;
	font-family: inherit;
	color: #000;
	border-radius: calc(var(--radius) * 2);
	&::placeholder {
		text-align: center;
		font-weight: var(--semi-medium);
		color: inherit;
		font-size: 1rem;
	}
`;

const Urlinput = ({ url, toggleurl, urlhandler }) => {
	return (
		<>
			<Url
				onClick={e => e.stopPropagation()}
				onBlur={toggleurl}
				type="url"
				name="url"
				id="url"
				placeholder="Paste image or url"
				pattern="https://.*"
				autoComplete="off"
				onChange={urlhandler}
				value={url}
			/>
		</>
	);
};

export default Urlinput;
