import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const AAA = () => {
  let navigate = useNavigate();
  const initialValues = { aadhar: "", pan: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [errorMessage, seterrorMessage] = React.useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);

    Object.keys(errors).length === 0 ? 
      navigate("/GST"): setIsError(true);
   };
  const validate = (values) => {
    const errors = {};
    const regex1 = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    const regex2 = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    if (!values.aadhar) {
      errors.aadhar = "aadhar no is required!";
    } else if (!regex1.test(values.aadhar)) {
      errors.aadhar = "aadhar no is invalid";
    }

    if (!values.pan) {
      errors.pan = "PAN no required";
    } else if (!regex2.test(values.pan)) {
      errors.pan = "PAN no is invalid";
    }

    return errors;
  };

  return (
    <>
      <div className="text-center m-5-auto container">
        <form onSubmit={handleSubmit} class="form" action="/home">
          <h2 class="h2">Document details</h2>

          <button id="A3">1 of 3</button>

          <p class="p">
            <label>Aadhar No.</label>
            <br />
            <input
              class="input"
              autocomplete="off"
              type="digit"
              name="aadhar"
              value={formValues.aadhar}
              onChange={handleChange}
              required
            />
          </p>
          <p class="p">
            <label>PAN No.</label>

            <br />
            <input
              class="input"
              autocomplete="off"
              type="digit"
              name="pan"
              value={formValues.pan}
              onChange={handleChange}
              required
            />
          </p>
          <div class="A2">
          {isError && <p style={{ color: "red" }}>Invalid data!</p>}
            <p class="p">
              <button id="s_btn" type="cancel">
                Cancel
              </button>
              <button id="button1" type="submit">
                Continue
              </button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default AAA;
