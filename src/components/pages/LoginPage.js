import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Sign-in </h2>
            <form action="/home">
                <p>
                    <label>Phone number</label><br/>
                    <input autocomplete="off" type="digit" name="digit" required />
                </p>
                <p>
                    <label>OTP</label>
                    <label href="#" className="right-label">Resend OTP</label>
                    <br/>
                    <input autocomplete="off" type="digit" name="digit" required />
                </p>
                <p>
                <Link to="/home"> <button id="sub_btn" type="submit">Login</button></Link>
                </p>
            </form>
            <footer>
                <p>New Here? <Link to="/register">Create an account</Link>.</p>
               
            </footer>
        </div>
    )
}
