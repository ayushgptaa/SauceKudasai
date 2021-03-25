import React from "react";
import useImagehandler from "../Hooks/useImagehandler";
import Uploadbtn from "./Uploadbtn";
import Previewimage from "./Previewimage";
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
      <Previewimage imagedata={imagedata} />
    </>
  );
};

export default Fileupload;
