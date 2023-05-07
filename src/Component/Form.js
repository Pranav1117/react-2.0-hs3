import React from "react";
import { useState } from "react";
import SaveData from "./SaveData";
import "./style.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    rating: "",
    data: [],
  });

  const [toggleFunc, setToggleFunc] = useState(true);
  // const [formPage, setFormPage] = useState(true);

  const toggleToForm = () => {
    setToggleFunc(!toggleFunc);
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const tempObj = {
      name: formData.name,
      department: formData.department,
      rating: formData.rating,
    };

    const arr = formData.data;
    arr.push(tempObj);
    setFormData({ data: arr });

    setToggleFunc(!toggleFunc);

    // setFormPage(!formPage);
  };

  //console.log(formData);

  return (
    <div>
      {toggleFunc ? (
        <>
          <div className="maindiv">
            <h1>EMPLOYEE FEEDBACK FORM</h1>

            <form className="form">
              <label>Name:</label>
              <input
                name="name"
                type="text"
                className="input"
                onChange={handleOnChange}
                placeholder="enter your name"
              ></input>

              <label>Department :</label>
              <input
                type="text"
                name="department"
                className="input"
                onChange={handleOnChange}
                placeholder="department"
              ></input>

              <label>Rating :</label>
              <input
                type="number"
                name="rating"
                className="input"
                onChange={handleOnChange}
                placeholder="rating"
              ></input>
              {/*saveData && <SaveData feedBackData={formData.data} */}
              <button onClick={handleSubmit} className="submit">
                Submit
              </button>
            </form>
          </div>
        </>
      ) : (
        <SaveData feedback={formData} toggleback={toggleToForm} />
      )}
    </div>
  );
}
export default Form;
