/** @format */

import * as styled from 'styled-components';

export const GlobalStyle = styled.createGlobalStyle`
	:root {
		/* Colors */
		--lavender: #d9d9f9;
		--lavenderlight: #f0f3ff;
		--lightblue: #2b2bde;
		--link: #0019f6;
		--nav: #fff;
		--cardbg: #151515;
		--Styledlinks: #394ae4;

		--border: 1.5px solid #fff;
		--radius: 0.9rem;
		--card-radius: 15px 15px 0px 0px;
		--box-shadow: 0px 5px 29px -4px rgba(0, 0, 0, 0.25), inset 0px 1px 5px rgba(0, 0, 0, 0.25);

		/* Font Weights */
		--regular: 400;
		--semi-medium: 500;
		--medium: 600;
		--semi-bold: 700;
		--bold: 800;
	}

	html,
	body {
		position: relative;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		overflow: hidden;
		max-height: 100vh;
		width: 100%;
		color: #fff;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'Inter', sans-serif;
		background: linear-gradient(116.2deg, #d9e5fa -0.48%, #fad9f3 102.36%);
		text-size-adjust: none;
		-webkit-text-size-adjust: none;
		-moz-text-size-adjust: none;
		-ms-text-size-adjust: none;
	}

	*,
	*:before,
	*:after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	video {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	button {
		border: none;
		cursor: pointer;
		outline: none;
		display: inline;
	}
	div,
	p {
		outline: none;
	}
	a {
		text-decoration: none;
		color: inherit;
	}

	ul {
		list-style: none;
		display: inline-block;
	}
	li {
		/* display: inline-block; */
		list-style: none;
		display: inline-block;
	}
`;
