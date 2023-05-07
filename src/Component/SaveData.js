import React from "react";
import "./style.css";

function SaveData(props) {
  console.log(props);

  return (
    <>
      <h1>EMPLOYEE FEEDBACK DATA</h1>
      <div className="data-container">
        {props.feedback.data.map((item, index) => {
          return (
            <div className="data-wrapper">
              Name :{item.name} | Department :{item.department} | Rating :
              {item.rating}
            </div>
          );
        })}
      </div>
      <button className="back-btn" onClick={props.toggleback}>
        Go Back
      </button>
    </>
  );
}
export default SaveData;
