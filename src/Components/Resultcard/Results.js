/** @format */
import { useContext } from 'react';
import { Context } from 'store/Context-Provider';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoIosArrowForward, IoMdClose } from 'react-icons/io';
import Overlay from '../Ui/Overlay';
import { AnimatePresence } from 'framer-motion';
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
	Info,
	Details,
	Summary,
	Links,
	Resultfooter,
	Moreinfo,
	StyledLink,
	Closebtn,
	// Genre,
} from './Resultstyle';

const Results = () => {
	const ctx = useContext(Context);
	const truncate = (str, num) => {
		if (str.length <= num) return str;
		return str.substring(0, num).concat('...');
	};
	// if (ctx.animeinfoexits) {
	// 	const { episode, time, bannerImage, coverImage, description, externalLinks, seasonYear, title, siteUrl } =
	// 		ctx.animeinfo;
	// }
	return (
		<>
			{ctx.animeinfoexits ? (
				<AnimatePresence key="animecard">
					<Overlay />
					<Animecard
						initial={{ y: '100%' }}
						animate={{ y: 0 }}
						exit={{
							y: '-100%',
							transition: {
								duration: 2,
								ease: 'easeInOut',
							},
						}}
						transition={{
							duration: 0.5,
							ease: 'easeInOut',
							type: 'linear',
							delay: 0.1,
						}}>
						<Banner>
							<Closebtn
								onClick={() => {
									ctx.cardhandler();
								}}>
								<IoMdClose color={'black'} size={20} />
							</Closebtn>
							{ctx.animeinfo.bannerImage ? (
								<>
									<Bannerimg src={ctx.animeinfo.bannerImage}></Bannerimg>
									<Banneroverlay></Banneroverlay>{' '}
								</>
							) : null}
						</Banner>
						<Animeinfo>
							<Cover>
								<Coverimg src={ctx.animeinfo.coverImage.large} alt=""></Coverimg>
							</Cover>
							<Animetext>
								<Title>{ctx.animeinfo.title.english}</Title>
								<Info>
									<Details>
										<h3>Ep {ctx.animeinfo.episode}</h3>
										<h3>at {(ctx.animeinfo.time / 60).toFixed(2).replace('.', ':')}</h3>
										<h3>{ctx.animeinfo.seasonYear}</h3>
									</Details>
								</Info>
								<Summary>
									<p>{ctx.animeinfo.description ? truncate(ctx.animeinfo.description, 250) : null}</p>
									<Links>
										{ctx.animeinfo.externalLinks.map(({ id, site, url }) => {
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
							<Resultfooter>
								<Moreinfo href={ctx.animeinfo.siteUrl} target="_blank">
									<AiOutlineInfoCircle size={15} />
									<span>More Info</span>
									<IoIosArrowForward size={15} />
								</Moreinfo>
								<span>
									Information by{' '}
									<StyledLink href="https://anilist.com" target="_blank">
										Anilist
									</StyledLink>
								</span>
							</Resultfooter>
						</Animeinfo>
					</Animecard>
				</AnimatePresence>
			) : null}
		</>
	);
};
export default Results;
