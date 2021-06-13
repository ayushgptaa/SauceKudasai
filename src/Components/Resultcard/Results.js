// import bannerimg from '../images/101921-GgvvFhlNhzlF.jpg';
// import coverimg from '../images/bx101921-qSV6zMacSDm4.png';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
// import { motion } from 'framer-motion';
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
	// const links = ['Crunchyroll', 'Funimation', 'Hulu', 'AnimeLab'];
	if (animeinfo) {
		console.log(animeinfo);
		const { bannerImage, coverImage, description, title, seasonYear, externalLinks } =
			animeinfo;
		return (
			// <Animeinfo>
			<Animecard>
				<Banner>
					<Bannerimg src={bannerImage}></Bannerimg>
					<Banneroverlay></Banneroverlay>
				</Banner>
				<Animeinfo>
					<Cover>
						<Coverimg src={coverImage.large} alt=""></Coverimg>
					</Cover>
					<Animetext>
						<Title>{title.english}</Title>
						<Details>
							{/* <h3>kaguya sama</h3> */}
							<h3>Ep 1</h3>
							<h3>At : 24:32</h3>
							<h3>{seasonYear}</h3>
						</Details>
						<Summary>
							{/* <p>{description}</p> */}
							<Links>
								{externalLinks.map(({ id, site, url }) => {
									return (
										<li key={id}>
											<StyledLink href={url} target="_blank">
												{site}
											</StyledLink>
										</li>
									);
								})}
							</Links>
						</Summary>
					</Animetext>
				</Animeinfo>
				<Moreinfo>
					<div>
						<AiOutlineInfoCircle size={20} />
						<span>More Info</span>
						<IoIosArrowForward size={19} />
					</div>
					<span>
						Information by{' '}
						<StyledLink href="https://anilist.com" target="_blank">
							Anilist
						</StyledLink>
					</span>
				</Moreinfo>
			</Animecard>
		);
	}
	return null;
};

export default Results;
