import React from "react";
import useFetchanime from "./useFetchanime";

export const Fileupload = () => {
  const { onchange, Uploadimage } = useFetchanime();
  return (
    <>
      <form id="myform">
        <label htmlFor="input">Select the image</label>
        <input
          type="file"
          id="input"
          accept="image/*"
          onChange={onchange}
        />
        <br />
        <button type="submit" onClick={Uploadimage}>
          Search
        </button>
      </form>
    </>
  );
};

export default Fileupload;
