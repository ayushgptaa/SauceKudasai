const Results = ({ apidata }) => {
	const style = {
		border: '1px solid black',
		textAlign: 'left',
		position: 'absolute',
		bottom: '0',
	};
	const Databox = (
		<div className='result' style={style}>
			{apidata.map(({ filename }, index) => {
				return <li key={index}>{filename}</li>;
			})}
		</div>
	);

	return <div className='result-container'>{apidata ? Databox : null}</div>;
};

export default Results;
