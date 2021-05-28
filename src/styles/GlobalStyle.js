import * as styled from 'styled-components';

export const GlobalStyle = styled.createGlobalStyle`
	:root {
		--primary: #000;
		--dropzone: #000;
		--nav: #fff;
		--border: 1.5px solid #fff;
		--radius: 0.9rem;
		--button: #2a9d8f;
		--card-radius: 30px 30px 0px 0px;
		--zindex-max: 99999;
	}

	html,
	body {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		overflow: hidden;
		height: 100vh;
		width: 100vw;
		color: #fff;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'Inter', sans-serif;
		background: linear-gradient(
			164.58deg,
			#d9f0fa -4.48%,
			#d9d9f9 39.87%,
			#fad9f3 103.31%,
			#fad9f3 103.31%
		);
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
`;
