import styled from 'styled-components';

export const DropArea = styled.div`
	background: var(--primary);
	width: 90%;
	height: 300px;
	padding: 1rem;
	margin: 1.5em auto;
	text-align: center;
	background: #ffffff;
	box-shadow: 0px 15px 40px 3px rgba(0, 0, 0, 0.25), inset 0px 1px 8px rgba(0, 0, 0, 0.25);
	border-radius: 30px;
	& p {
		font-weight: 600;
		font-size: 0.8rem;
		margin-top: 1rem;
		letter-spacing: 1px;
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
