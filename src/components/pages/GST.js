import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

const GST = () => {
  return (
   <>
       <div className="text-center m-5-auto container">

<form class="form" action="/home">

    <button id="A3" >2 of 3</button>

    <p class="p">
        <label>GST No.</label><br />
        <input class="input" autocomplete="off" type="digit" name="digit" required />
    </p>
    <p class="p">
        We fetched some details from your GST please check them carefully.
    </p>
    <div class="A2">
        <p class="p">
            <button id="s_btn"  type="cancel">Re-enter</button>
            <Link to="/TAN"> <button id="button1" type="submit" >Next</button></Link>
        </p>
    </div>
</form>

</div>
   </>
  )
}

export default GST