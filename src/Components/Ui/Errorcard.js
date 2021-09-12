/** @format */

import { useContext } from 'react';
import Overlay from '../Ui/Overlay';
import styled from 'styled-components';
import Chikagif from 'Components/Ui/images/chika.gif';
import Kaguyasama from 'Components/Ui/images/kaguya-sama.gif';
import { respondTo } from '../../styles/mixins';
import { Closebtn } from './Closebtn';
import { Context } from 'store/Context-Provider';
import { AnimatePresence, motion } from 'framer-motion';

const Container = styled(motion.div)`
	width: 280px;
	height: 280px;
	z-index: 200;
	background: var(--cardbg);
	border-radius: 15px;
	position: absolute;
	top: 45%;
	left: 50%;

	${respondTo.xs`
		height: 320px;
		width: 400px;
	`}
	${respondTo.sm`
		height: 400px;
		width: 450px;
	`}

	${respondTo.lg` {
		height: 450px;
		width: 600px;
	`}
`;

const Gif = styled.div`
	width: 100%;
	border-radius: 15px;
	position: relative;

	img {
		border-radius: 15px 15px 0 0;
		user-select: none;
	}
`;

const Errormsg = styled.div`
	text-align: center;
	color: var(--lavender);
	padding: 1rem;

	h3 {
		font-weight: var(--regular);
		font-size: 1.3rem;
		margin-top: 0.5rem;
		${respondTo.sm`
		font-size: 1.5rem;
		`}
		${respondTo.lg`
		font-size: 1.6rem;
		font-weight: var(--semi-medium);
		`}
	}
`;
const variants = {
	initial: { scale: 0, x: '-50%', y: '-50%' },
	animate: {
		scale: 1,
		transition: {
			duration: 0.9,
			ease: 'easeInOut',
			type: 'spring',
			delay: 0.1,
		},
	},
	exit: {
		scale: 0,
		transition: {
			duration: 0.6,
			delay: 0.1,
		},
	},
};
export const Errorcard = ({ image, error, errormsg }) => {
	const ctx = useContext(Context);
	return (
		<AnimatePresence>
			{error ? (
				<>
					<Overlay />
					<Container variants={variants} key="Errorcard" initial="initial" animate="animate" exit="exit">
						<Gif>
							<img src={image} alt="Server Error" />
							<Closebtn
								onClick={() => {
									ctx.errorhandler();
								}}
							/>
						</Gif>
						<Errormsg>
							<h3>{errormsg}</h3>
						</Errormsg>
					</Container>
				</>
			) : null}
		</AnimatePresence>
	);
};

export const UserError = () => {
	const ctx = useContext(Context);
	const error = ctx.usererror;
	return (
		<Errorcard
			image={Kaguyasama}
			errormsg="Looks like you are offline or using wrong image/url 👉👈"
			error={error}
		/>
	);
};
export const ServerError = () => {
	const ctx = useContext(Context);
	const error = ctx.servererror;
	return <Errorcard image={Chikagif} errormsg="Saba-chan is a little busy at the moment 😓" error={error} />;
};
