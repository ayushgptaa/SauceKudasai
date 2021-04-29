import styled from 'styled-components';

const Button = styled.button`
	padding: 0.4rem 2rem;
	background: var(--button);
	font-family: inherit;
	font-weight: 700;
	color: #fff;
	letter-spacing: 2px;
	border: var(--border);
	border-bottom: 3px solid #fff;
	margin-top: 1rem;
`;
const Uploadbtn = ({ fileupload }) => {
	return (
		<div>
			<Button onClick={fileupload} type='submit'>
				Search
			</Button>
		</div>
	);
};
export default Uploadbtn;
