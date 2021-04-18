import React from "react";

const Previewimage = ({ imagedata , loading, video}) => {
  return (
    <div>
      {video ===null ?
      loading ?
      <p>Loading....</p> 
      :
      <div className="image-container">
        {imagedata ? (
          <img src={imagedata} alt="" />
        ) : (
          <p>no image selected</p>
        )}
     </div>:
     <video 
          autoPlay
          loop
          muted 
          src={video}>
      </video>
     } 
    </div>
  );
};

export default Previewimage;
