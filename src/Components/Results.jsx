import styled from 'styled-components';
import bannerimg from './images/101921-GgvvFhlNhzlF.jpg';

const Animeinfo = styled.div`
	position: absolute;
	bottom: 0;
	height: 55vh;
	width: 100vw;
	background: #1d1c1c;
	border-radius: var(--card-radius);
`;
const Banner = styled.div`
	height: 40%;
	position: relative;
`;
const Bannerimg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: var(--card-radius);
`;

const Banneroverlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 2;
	border-radius: var(--card-radius);
`;
const Results = ({ animeinfo }) => {
	if (animeinfo) {
		const { bannerImage, description } = animeinfo;
		return (
			<Animeinfo>
				<div>
					<img src={bannerImage} alt='xyz' />
					<p>{description}</p>
				</div>
			</Animeinfo>
		);
	}
	return (
		<Animeinfo>
			<Banner>
				<Bannerimg src={bannerimg}></Bannerimg>
				<Banneroverlay></Banneroverlay>
			</Banner>
		</Animeinfo>
	);
};

export default Results;
