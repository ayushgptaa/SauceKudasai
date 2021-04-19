import React from 'react';
import Dropzone from 'react-dropzone'


export const Fileupload = ({ onchange }) => {
	return (
		<>
			<Dropzone onDrop={onchange} accept='image/*' multiple={false} >
  				{({getRootProps, getInputProps,open}) => (
    			<section>
      				<div {...getRootProps()}>
        				<input {...getInputProps()} />
        					<p>Drag 'n' drop some files here, or click to select files</p>
     				</div>
					<button type="button" onClick={open}>
          				Open File Dialog
        			</button>
    			</section>
	
  				)}
			</Dropzone>
		</>
	);
};

export default Fileupload;
