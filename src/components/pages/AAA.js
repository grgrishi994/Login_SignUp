import React from 'react'

import { Link } from 'react-router-dom'

import '../../App.css'

const AAA = () => {
    return (
        <>
            <div className="text-center m-5-auto container">

                <form class="form" action="/home">

                    <h2 class="h2">Document details</h2>

                    <button id="A3" >1 of 3</button>

                    <p class="p">
                        <label>Aadhar No.</label><br />
                        <input class="input" autocomplete="off" type="digit" name="digit" required />
                    </p>
                    <p class="p">
                        <label>PAN No.</label>

                        <br />
                        <input class="input" autocomplete="off" type="digit" name="digit" required />
                    </p>
                    <div class="A2">
                        <p class="p">
                            <button id="s_btn"  type="cancel">Cancel</button>
                            <Link to="/GST"> <button id="button1"  type="submit" >Continue</button></Link>
                        </p>
                    </div>
                </form>

            </div>
        </>
    )
}

export default AAA