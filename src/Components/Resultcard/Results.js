import bannerimg from '../images/101921-GgvvFhlNhzlF.jpg';
import coverimg from '../images/bx101921-qSV6zMacSDm4.png';
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
const Results = ({ animeinfo, time, episode }) => {
	const links = ['Crunchyroll', 'Funimation', 'Hulu', 'AnimeLab'];
	if (animeinfo) {
		console.log(animeinfo);
		const { bannerImage, coverImage, description, title, seasonYear, externalLinks } =
			animeinfo;
		return (
			<Animecard
				initial={{ y: '100%' }}
				animate={{ y: 0 }}
				transition={{ duration: 0.8, ease: 'linear', type: 'Tween', delay: 1 }}>
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
							<h3>Ep {episode}</h3>
							<h3>At : {(time / 60).toFixed(2)}</h3>
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
	} else
		return (
			<Animecard
				initial={{ y: '100%' }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5, ease: 'linear', type: 'Tween', delay: 0.5 }}>
				<Banner>
					<Bannerimg src={bannerimg}></Bannerimg>
					<Banneroverlay></Banneroverlay>
				</Banner>
				<Animeinfo>
					<Cover>
						<Coverimg src={coverimg} alt=""></Coverimg>
					</Cover>
					<Animetext>
						<Title>Kaguya Sama: Love is War</Title>
						<Details>
							{/* <h3>kaguya sama</h3> */}
							<h3>Ep {episode}</h3>
							<h3>At : {(time / 60).toFixed(2)}</h3>
							<h3>2000</h3>
						</Details>
						<Summary>
							{/* <p>{description}</p> */}
							<Links>
								{links.map(({ id, site, url }) => {
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
};

export default Results;
