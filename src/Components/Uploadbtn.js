import React from "react";
import axios from "axios";

const Uploadbtn = ({ imagedata }) => {
  const fileUpload = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      image: imagedata,
    });
    const url = "https://trace.moe/api/search";
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const { data } = await axios.post(url, body, headers); // post request to the server
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={fileUpload} type="submit">
        Search
      </button>
    </div>
  );
};
export default Uploadbtn;
