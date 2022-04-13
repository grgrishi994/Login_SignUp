import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import '../../App.css'

const TAN = () => {
    let navigate = useNavigate();
    const initialValues = { TAN:""};
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
            navigate("/login")
          ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )}
      
    };

    const validate = (values) => {
        const errors = {};
        const regex1=/^[ A-Za-z0-9_@./#&+-]*$/;
        if (!values.TAN) {
            errors.TAN = 'TAN no required';
        } else if (!regex1.test(values.TAN)) {
            errors.TAN= 'TAN no is invalid';
        }
        return errors;
    };
   
  return (
    <>
       <div className="text-center m-5-auto container">

<form onSubmit={handleSubmit}  class="form" action="/home">

    <button id="A3" >3 of 3</button>

    <p class="p">
        <label>TAN No.</label><br />
        <input class="input" autocomplete="off" type="digit"
         name="TAN" 
         value={formValues.TAN}
         onChange={handleChange}
         required />
    </p>
    
    <div class="A2">
        <p class="p">
            <button id="s_btn"  type="cancel">Re-enter</button>
            <Link to="/"> <button id="button1" type="submit" >Submit</button></Link>
        </p>
    </div>
</form>

</div>
    </>
  )
}

export default TAN