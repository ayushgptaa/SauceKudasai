import React from 'react';

export const Fileupload = ({ onchange }) => {
	return (
		<>
			<form id='myform'>
				<label htmlFor='input'>Select the image</label>
				<input type='file' id='input' accept='image/*' onChange={onchange} />
				<br />
			</form>
		</>
	);
};

export default Fileupload;
