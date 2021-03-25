import React from "react";
import useImagehandler from "../Hooks/useImagehandler";
import Uploadbtn from "./Uploadbtn";

export const Fileupload = () => {
  const { onChange, imagedata } = useImagehandler();

  return (
    <>
      <form id="myform">
        <label htmlFor="input">Select the image</label>
        <input
          type="file"
          id="input"
          accept="image/*"
          onChange={onChange}
        />
        <br />
        <Uploadbtn imagedata={imagedata}>Search</Uploadbtn>
      </form>
      <div className="image-container">
        {imagedata ? (
          <img src={imagedata} alt="" />
        ) : (
          <p>no image selected</p>
        )}
      </div>
    </>
  );
};

export default Fileupload;
