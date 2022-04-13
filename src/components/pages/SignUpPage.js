import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import '../../App.css'

export default function SignUpPage() {

    let navigate = useNavigate();
    const initialValues = { username: "", digits: "", email: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        {Object.keys(formErrors).length === 0 && isSubmit ? (
            navigate("/aadhar")
          ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )}
       
    };

    

    const validate = (values) => {
        const errors = {};
        const regex1=/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        const regex2 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.digits) {
            errors.digits = 'Phone no required';
        } else if (!regex1.test(values.digits)) {
            errors.digits = 'Phone no is invalid';
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
            <form onSubmit={handleSubmit} action="/home">
                <p>
                    <label>Username</label><br />
                    <input autocomplete="off" type="text" name="username"
                        value={formValues.username}
                        onChange={handleChange}
                        required />

                </p>
                <p>
                    <label>Phone number</label><br />
                    <input type="tel" autocomplete="off"
                        placeholder="123-45-678"
                        name="digits"
                        value={formValues.digits}
                        onChange={handleChange}
                        required />
                </p>
                <p>
                    <label>Email address</label><br />
                    <input autocomplete="off" type="text" name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required />
                </p>

                <p>
                    <button id="sub_btn" type="submit">Submit.</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}