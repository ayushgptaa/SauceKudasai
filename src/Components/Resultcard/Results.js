import bannerimg from '../images/101921-GgvvFhlNhzlF.jpg';
import coverimg from '../images/bx101921-qSV6zMacSDm4.png';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
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
	Moreinfo,
	StyledLink,
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
					<Title>Kaguya sama: Love is War</Title>
					<Details>
						{/* <h3>kaguya sama</h3> */}
						<h3>Ep 1</h3>
						<h3>At :24:32</h3>
						<h3>3 seaons</h3>
					</Details>
					<Summary>
						<p>
							Known for being both brilliant and powerful, Miyuki Shirogane and Kaguya
							....
						</p>
						<Links>
							{links.map(link => {
								return (
									<StyledLink>
										<li>{link}</li>
									</StyledLink>
								);
							})}
						</Links>
					</Summary>
				</Animetext>
			</Animeinfo>
			<Moreinfo>
				<div>
					<AiOutlineInfoCircle />
					<span>More Info</span>
					<IoIosArrowForward />
				</div>
				<p>Information by Anilist</p>
			</Moreinfo>
		</Animecard>
	);
};

export default Results;
