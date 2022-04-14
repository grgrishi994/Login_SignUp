import React ,{ useState }from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import '../../App.css'

const GST = () => {
    let navigate = useNavigate();
    const initialValues = { GST:""};
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
       
        Object.keys(errors).length === 0  ?
            navigate("/TAN")
           : setIsError(true);
          
    };

    const validate = (values) => {
        const errors = {};
        const regex1=/[A-Z]{5}[0-9]{4}[A-Z]{1}/;
        if (!values.GST) {
            errors.GST = 'GST no required';
        } else if (!regex1.test(values.GST)) {
            errors.GST= 'GST no is invalid';
        }
        return errors;
    };
        return (
   <>
       <div className="text-center m-5-auto container">

<form onSubmit={handleSubmit} class="form" action="/home">

    <button id="A3" >2 of 3</button>

    <p class="p">
        <label>GST No.</label><br />
        <input class="input" autocomplete="off" type="digit" name="GST" 
          value={formValues.GST}
                        onChange={handleChange}
        required />
    </p>
    <p class="p">
        We fetched some details from your GST please check them carefully.
    </p>
    <div class="A2">
    {isError && <p style={{ color: "red" }}>Invalid data!</p>}
        <p class="p">
            <button id="s_btn"  type="cancel">Re-enter</button>
            <button id="button1" type="submit" >Next</button>
        </p>
    </div>
</form>

</div>
   </>
  )
}

export default GST