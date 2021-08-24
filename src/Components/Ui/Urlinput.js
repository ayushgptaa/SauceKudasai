/** @format */

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Filebtn } from 'Components/Ui/Filebtn';
import { respondTo } from 'styles/mixins';
import { Closebtn } from './Closebtn';

const Url = styled(motion.input)`
	position: relative;
	border: none;
	outline: none;
	background: var(--lavender);
	padding: 0rem 3rem;
	height: 40px;
	font-family: inherit;
	color: #000;
	border-radius: calc(var(--radius) * 2);
	margin-top: 1.4rem;
	&::placeholder {
		font-weight: var(--semi-medium);
		color: inherit;
	}
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

const Urlinput = ({ url, toggleurl, urlhandler, showurl, open }) => {
	return (
		<>
			<AnimatePresence exitBeforeEnter={true}>
				{showurl ? (
					<>
						<Url
							key="urlbtn"
							onClick={e => e.stopPropagation()}
							onBlur={toggleurl}
							type="url"
							name="url"
							id="url"
							placeholder="Paste image or url"
							pattern="https://.*"
							autoComplete="off"
							onChange={urlhandler}
							value={url}
							initial={{ width: 0 }}
							animate={{ width: '250px' }}
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
						<Closebtn />
					</>
				) : (
					<Filebtn open={open} toggleurl={toggleurl} key1="btn1" key2="btn2" />
				)}
			</AnimatePresence>
		</>
	);
};

export default Urlinput;
