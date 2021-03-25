import React, { createContext, useState } from "react";
import axios from "axios";
import Result from "./Results";
const Data = createContext();

const Uploadbtn = ({ imagedata }) => {
  const [apidata, setApidata] = useState([]);
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
      setApidata(data.docs);
      console.log(data.docs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={fileUpload} type="submit">
        Search
      </button>
      <Data.Provider value={apidata}>
        <Result></Result>
      </Data.Provider>
    </div>
  );
};
export default Uploadbtn;
export { Data };
