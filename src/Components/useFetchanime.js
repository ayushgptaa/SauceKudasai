import axios from "axios";
import { useState } from "react";

const useFetchanime = () => {
  const [image, setimage] = useState("");

  // To set image to the file selected by user using setimage
  const onchange = async (e) => {
    setimage(e.target.files[0]);
  };
  // When user clicks on the Search button
  const Uploadimage = async (e) => {
    e.preventDefault();
    try {
      // Storing image user selected by input in file
      const file = image;
      // Creating a new constructor reader
      var reader = new FileReader();

      // Load event is fired as soon as readAsDataUrl is completed
      reader.addEventListener("load", async () => {
        const body = JSON.stringify({
          image: reader.result,
        });
        const url = "https://trace.moe/api/search";
        const headers = {
          "Content-Type": "application/json",
        };
        const postimage = async () => {
          const { data } = await axios.post(
            url,
            body,
            headers
          ); // post request to the server
          console.log(data);
        };
        postimage();
      });
      reader.readAsDataURL(file); // When this is completed the above load event is fired
    } catch (error) {
      console.log("something wrong happened" + error); // Fallback when image fails to upload
    }
  };
  return { onchange, Uploadimage };
};

export default useFetchanime;
