import * as styled from 'styled-components';

export const GlobalStyle = styled.createGlobalStyle`
	:root {
		--primary: #1d2125;
		--secondary: #2a2e35;
		--border: #4b4d50;
		--radius: 0.9rem;
	}

	html,
	body {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		background: var(--primary);
		height: 100vh;
		width: 100vw;
		color: #fff;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'Inter', sans-serif;
		/* overflow: hidden; */
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
	}
`;
