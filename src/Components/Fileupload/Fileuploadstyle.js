import styled from 'styled-components';

export const DropArea = styled.div`
	background: var(--primary);
	width: 88%;
	height: 310px;
	padding: 1.6rem;
	margin: 1.5em auto;
	text-align: center;
	background: #ffffff;
	box-shadow: 0px 5px 29px -4px rgba(0, 0, 0, 0.25), inset 0px 1px 5px rgba(0, 0, 0, 0.25);
	border-radius: 35px;

	& p {
		font-weight: 600;
		font-size: 0.8rem;
		margin-top: 1rem;
		letter-spacing: 1px;
	}
	@media (min-width: 500px) {
		height: 400px;
		width: 450px;
	}
	@media (min-width: 750px) {
		/* margin-top: 100px; */
		height: 400px;
		width: 550px;
	}
	@media (min-width: 900px) {
		margin-top: 50px;
		height: 380px;
		width: 720px;
	}
`;
export const Url = styled.input`
	margin-top: 1rem;
	border: none;
	width: 250px;
	background: #f1880c;
	padding: 0.7rem 3rem;
	border: var(--border);
	font-family: inherit;
	font-weight: 500;
	color: #fff;
	&::placeholder {
		text-align: center;
		font-weight: 700;
		color: inherit;
		letter-spacing: 1px;
	}
`;
