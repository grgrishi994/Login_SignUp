import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

const TAN = () => {
  return (
    <>
       <div className="text-center m-5-auto container">

<form class="form" action="/home">

    <button id="A3" >3 of 3</button>

    <p class="p">
        <label>TAN No.</label><br />
        <input class="input" autocomplete="off" type="digit" name="digit" required />
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