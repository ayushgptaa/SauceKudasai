/** @format */

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Filebtn } from 'Components/Ui/Filebtn';

const Url = styled(motion.input)`
	border: none;
	outline: none;
	/* width: 250px; */
	background: var(--lavender);
	padding: 0rem 3rem;
	height: 40px;
	font-family: inherit;
	color: #000;
	border-radius: calc(var(--radius) * 2);
	margin-top: 0.8rem;
	&::placeholder {
		text-align: center;
		font-weight: var(--semi-medium);
		color: inherit;
		font-size: 1rem;
	}
`;

const Urlinput = ({ url, toggleurl, urlhandler, showurl, open }) => {
	return (
		<>
			<AnimatePresence exitBeforeEnter={true}>
				{showurl ? (
					<Url
						key="url"
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
				) : (
					<Filebtn open={open} toggleurl={toggleurl} key="Filebtn" />
				)}
			</AnimatePresence>
		</>
	);
};

export default Urlinput;
