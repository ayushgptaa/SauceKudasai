import { useState } from "react";
const useimagehandler = () => {
  const [image, setimage] = useState("");
  const [imagedata, setimagedata] = useState("");

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
      reader.addEventListener("load", async () => {
        setimagedata(reader.result);
      });
      reader.readAsDataURL(file); // When this is completed the above load event is fired
    } catch (error) {
      console.log("something wrong happened" + error); // Fallback when image fails to upload
    }
  };
  return { imagedata, onchange, Uploadimage };
};

export default useimagehandler;
