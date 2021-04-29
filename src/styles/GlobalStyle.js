import * as styled from 'styled-components';

export const GlobalStyle = styled.createGlobalStyle`
	:root {
		--primary: #000;
		--dropzone: #000;
		--nav: #fff;
		--border: 1.5px solid #fff;
		--radius: 0.9rem;
		--button: #2a9d8f;
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
