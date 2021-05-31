import { Button } from './UploadbtnStyles';
const Uploadbtn = ({ fileupload }) => {
	return (
		<div>
			<Button onClick={fileupload} type='submit'>
				Search
			</Button>
		</div>
	);
};
export default Uploadbtn;
