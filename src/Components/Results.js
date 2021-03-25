import { useContext } from "react";
import { Data } from "./Uploadbtn";

const Results = () => {
  const context = useContext(Data);
  const style = {
    border: "1px solid black",
    textAlign: "left",
    position: "absolute",
    bottom: "0",
  };
  const Databox = (
    <div className="result" style={style}>
      {context.map(({ filename }) => {
        return <li>{filename}</li>;
      })}
    </div>
  );

  return (
    <div className="result-container">
      {context ? Databox : null}
    </div>
  );
};

export default Results;
