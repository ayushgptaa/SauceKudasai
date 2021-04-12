import React from "react";

const Previewimage = ({ imagedata }) => {
  return (
    <div>
      <div className="image-container">
        {imagedata ? (
          <img src={imagedata} alt="" />
        ) : (
          <p>no image selected</p>
        )}
      </div>
    </div>
  );
};

export default Previewimage;
