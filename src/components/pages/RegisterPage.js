import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {
   
    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input autocomplete="off" type="text" name="username"  required />
                </p>
                <p>
                    <label>Phone number</label><br/>
                    <input type="digits" autocomplete="off" name="digits"  required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input autocomplete="off" type="email" name="email"  required />
                </p>
                
               
                <p>
                <Link to="/aadhar">   <button id="sub_btn" type="submit">Submit.</button></Link>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
