import styled from 'styled-components';
import bannerimg from './images/101921-GgvvFhlNhzlF.jpg';

const Animeinfo = styled.div`
	position: absolute;
	bottom: 0;
	height: 55vh;
	width: 100vw;
	background: #1d1c1c;
	border-radius: 40px 40px 0px 0px;
`;
const Banner = styled.div`
	height: 40%;
`;
const Bannerimg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 40px 40px 0px 0px;
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
			</Banner>
		</Animeinfo>
	);
};

export default Results;
