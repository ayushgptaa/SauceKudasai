import bannerimg from '../images/101921-GgvvFhlNhzlF.jpg';
import coverimg from '../images/bx101921-qSV6zMacSDm4.png';
import {
	Animecard,
	Bannerimg,
	Banner,
	Banneroverlay,
	Cover,
	Coverimg,
	Animeinfo,
	Animetext,
	Title,
	Details,
	Summary,
	Links,
} from './Resultstyle';

// const Coverimg=
const Results = ({ animeinfo }) => {
	const links = ['Crunchyroll', 'Funimation', 'Hulu', 'AnimeLab'];
	if (animeinfo) {
		const { bannerImage, description } = animeinfo;
		return (
			// <Animeinfo>
			<div>
				<img src={bannerImage} alt="xyz" />
				<p>{description}</p>
			</div>
		);
	}
	return (
		<Animecard>
			<Banner>
				<Bannerimg src={bannerimg}></Bannerimg>
				<Banneroverlay></Banneroverlay>
			</Banner>
			<Animeinfo>
				<Cover>
					<Coverimg src={coverimg} alt=""></Coverimg>
				</Cover>
				<Animetext>
					<Title>Kaguya sama</Title>
					<Details>
						{/* <h3>kaguya sama</h3> */}
						<h3>Ep 1</h3>
						<h3>At :24:32</h3>
					</Details>
					<Summary>
						<p>
							Known for being both brilliant and powerful, Miyuki Shirogane and Kaguya
							.....
						</p>
						<Links>
							{links.map(link => {
								return <li>{link}</li>;
							})}
						</Links>
					</Summary>
				</Animetext>
			</Animeinfo>
		</Animecard>
	);
};

export default Results;
