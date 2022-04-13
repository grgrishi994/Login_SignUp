import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import '../../App.css'

export default function LoginPage() {
  let navigate = useNavigate();
    const initialValues = { digits:"", OTP: ""};
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
      navigate("/home")
    ) : (
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    )}
    };

    // useEffect(() => {
    //     console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //       console.log(formValues);
    //     }
      // }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
       
        if (!values.digits) {
            errors.digits = "Phone no is required!";
          }else if (!regex.test(values.digits)) {
            errors.digits = 'Phone no is invalid';
        }

          if (!values.OTP) {
            errors.OTP = "OTP is required!";
          }else if (!regex.test(values.OTP)) {
            errors.OTP = 'OTP is invalid';
        }
       
        return errors;
      };

   
    return (

        <div className="text-center m-5-auto">
            <h2>Sign-in </h2>
            <form onSubmit={handleSubmit} action="/home">
                <p>
                    <label>Phone number</label><br/>
                    <input autocomplete="off" type="tel" name="digits"
                    value={formValues.digits}
                        onChange={handleChange}
                     required />
                </p>
                <p>
                    <label>OTP</label>
                    <label href="#" className="right-label" >Resend OTP</label>
                    <br/>
                    <input autocomplete="off" type="digit" 
                    name="OTP" 
                    value={formValues.OTP}
                        onChange={handleChange}
                    required />
                </p>
                <p>
                <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>New Here? <Link to="/register">Create an account</Link>.</p>
               
            </footer>
        </div>
    )
}
