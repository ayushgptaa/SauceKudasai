import bannerimg from '../images/101921-GgvvFhlNhzlF.jpg';
import coverimg from '../images/bx101921-qSV6zMacSDm4.png';
import {
	Animecard,
	Animeinfo,
	Bannerimg,
	Banner,
	Banneroverlay,
	Cover,
	Coverimg,
	Animedetails,
} from './Resultstyle';

// const Coverimg=
const Results = ({ animeinfo }) => {
	if (animeinfo) {
		const { bannerImage, description } = animeinfo;
		return (
			// <Animeinfo>
			<div>
				<img src={bannerImage} alt='xyz' />
				<p>{description}</p>
			</div>
		);
	}
	return (
		<Animecard>
			<Animeinfo>
				<Banner>
					<Bannerimg src={bannerimg}></Bannerimg>
					<Banneroverlay></Banneroverlay>
				</Banner>
				<Animedetails>
					<Cover>
						<Coverimg src={coverimg} alt=''></Coverimg>
					</Cover>
					<h1>Kaguya sama</h1>
				</Animedetails>
			</Animeinfo>
		</Animecard>
	);
};

export default Results;
