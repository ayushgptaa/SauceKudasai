/** @format */
import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 98;
	cursor: pointer;
`;

const overlay = ({ onClick }) => {
	return <Overlay onClick={onClick} />;
};

export default overlay;
