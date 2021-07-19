/** @format */

import { SearchBtn } from './UploadbtnStyles';
const Uploadbtn = ({ fileupload }) => {
	return (
		<div>
			<SearchBtn onClick={fileupload} type="submit">
				Search
			</SearchBtn>
		</div>
	);
};
export default Uploadbtn;
