import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function SignUpPage() {
  let navigate = useNavigate();
  const initialValues = { username: "", digits: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [errorMessage, seterrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const errors = validate(formValues);

    Object.keys(errors).length === 0 ? navigate("/aadhar") : setIsError(true);

    const res = await fetch(
      "https://big-business-2dc24-default-rtdb.firebaseio.com/user-data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.username,
          contact: formValues.digits,
          email: formValues.email,
        }),
      }
    );
    
  
  };

  const validate = (values) => {
    const errors = {};
    const regex1 = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    const regex2 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.digits) {
      errors.digits = "Phone no required";
    } else if (values.digits && !regex1.test(values.digits)) {
      errors.digits = "Phone no is invalid";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex2.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };
  return (
    <div className="text-center m-5-auto">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form action="/home" method="POST">
        <p>
          <label>Username</label>
          <br />
          <input
            autocomplete="off"
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            required
          />
        </p>

        <p>
          <label>Phone number</label>
          <br />
          <input
            type="tel"
            autocomplete="off"
            placeholder="123-45-678"
            name="digits"
            value={formValues.digits}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input
            autocomplete="off"
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </p>
        {isError && <p style={{ color: "red" }}>Invalid data!</p>}
        <p>
          <button id="sub_btn" type="submit" onClick={handleSubmit}>
            Submit.
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
