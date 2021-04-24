const Results = ({ animeinfo }) => {
	if (animeinfo) {
		const { bannerImage, description } = animeinfo;
		const Databox = (
			<div>
				<img src={bannerImage} alt='xyz' />
				<p>{description}</p>
			</div>
		);
		return <div className='result-container'>{Databox}</div>;
	}
	return null;
};

export default Results;
