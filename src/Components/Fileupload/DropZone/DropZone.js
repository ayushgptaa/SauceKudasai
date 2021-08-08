/** @format */

import { useContext } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import Previewimage from 'Components/Preview/Previewimage';
import { Imagecontainer, respondTo } from 'styles/mixins';
import { Filebtn } from 'Components/Ui/Filebtn';
import Urlinput from 'Components/Ui/Urlinput';
import { Context } from 'store/Context-Provider';

const Dropcontainer = styled.div`
	color: #000;
	box-sizing: border-box;
	height: 75%;
	margin: 0.3rem;
	background: var(--lavenderlight);
	border-radius: 20px;
	user-select: none;
	padding-top: 1.1rem;
	${respondTo.sm`
		height: 80es%;
	`}
	${respondTo.md`
		height: 75%;
	`}

	${respondTo.lg`
		height: 78%;
		border-radius: 25px;
		margin: 0.8rem 1.5rem;
	`}
`;

const PreviewContainer = styled(Imagecontainer)`
	height: 120px;
	width: 200px;
	margin: auto;
	position: relative;
	border-radius: calc(var(--radius) / 2);
	${respondTo.xs`
		height: 160px;
		width: 280px;
	`}
	${respondTo.sm`
		height: 160px;
		width: 280px;
	`} 
	/* ${respondTo.md`
		height: 200px;
		width: 330px;
	`}  */
	${respondTo.lg`{
		height: 75%;
		width: 45%;
	`}
`;
const DropZone = ({ video, loading, showurl, toggleurl }) => {
	const ctx = useContext(Context);
	const { onChange, image, urlhandler, url } = ctx;
	return (
		<>
			<Dropzone onDrop={onChange} accept="image/*" multiple={false} noClick={true}>
				{({ getRootProps, getInputProps, open }) => (
					<Dropcontainer {...getRootProps()}>
						<input {...getInputProps()} />
						<PreviewContainer>
							<Previewimage image={image} loading={loading} video={video} url={url} open={open} />
						</PreviewContainer>
						<Urlinput
							url={url}
							toggleurl={toggleurl}
							urlhandler={urlhandler}
							showurl={showurl}
							open={open}
						/>
						{/* <Filebtn open={open} toggleurl={toggleurl} showurl={showurl} /> */}
					</Dropcontainer>
				)}
			</Dropzone>
		</>
	);
};

export default DropZone;
