/** @format */

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Filebtn } from 'Components/Ui/Filebtn';
import { respondTo } from 'styles/mixins';
import { IoMdClose } from 'react-icons/io';

const UrlContainer = styled.div`
	position: relative;
	height: 40px;
	width: 220px;
	display: inline-block;
	margin-top: 1.4rem;

	${respondTo.xs`
		margin: 0.6rem 0.6rem 0 0;
	`}
	${respondTo.sm`
		margin-top: 1rem;
	`}
	${respondTo.md`
		margin-top: 0.8rem ;
		font-size: 1rem;
	`}
`;
const Url = styled(motion.input)`
	position: relative;
	border: none;
	outline: none;
	background: var(--lavender);
	padding: 0rem 2.5rem;
	height: 40px;
	font-family: inherit;
	color: #000;
	border-radius: calc(var(--radius) * 2);
	font-size: 1rem;
	&::placeholder {
		font-size: 1rem;
		font-weight: var(--semi-medium);
		color: inherit;
	}
`;

const UrlClosebtn = motion.div;

export const CloseBtn = styled.div`
	display: grid;
	place-items: center;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 0.8rem;
	border-radius: 50%;
	height: 24px;
	width: 24px;
	background: rgba(255, 255, 255, 0.7);
	cursor: pointer;
	z-index: 99;
`;

const Urlinput = ({ url, toggleurl, urlhandler, showurl, open }) => {
	return (
		<>
			<AnimatePresence exitBeforeEnter={true}>
				{showurl ? (
					<UrlContainer>
						<Url
							key="urlbtn"
							onClick={e => e.stopPropagation()}
							onBlur={toggleurl}
							type="url"
							name="url"
							id="url"
							placeholder="Paste your url"
							pattern="https://.*"
							autoComplete="off"
							onChange={urlhandler}
							value={url}
							initial={{ width: 0 }}
							animate={{ width: '220px' }}
							exit={{
								width: 0,
								padding: 0,
								transition: {
									duration: 1,
									ease: 'easeInOut',
								},
							}}
							transition={{
								duration: 1,
								ease: 'easeInOut',
								type: 'spring',
							}}
						/>
						<UrlClosebtn
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								delay: 1,
							}}>
							<CloseBtn onClick={toggleurl}>
								<IoMdClose color={'black'} size={20} />
							</CloseBtn>
						</UrlClosebtn>
					</UrlContainer>
				) : (
					<Filebtn open={open} toggleurl={toggleurl} key1="btn1" key2="btn2" />
				)}
			</AnimatePresence>
		</>
	);
};

export default Urlinput;
