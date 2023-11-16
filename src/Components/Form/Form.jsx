import './Form.css'
import Popup from './Popup'
import { useState } from 'react'

const Form = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleCheckboxClick = () => {
    setShowPopup(!showPopup)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            className="inputs"
            id="fName"
            placeholder="First Name"
            required="required"
          />
          <input
            type="text"
            className="inputs"
            id="nName"
            placeholder="New Name"
            required="required"
          />
          <input
            type="password"
            className="inputs"
            id="pass"
            minLength="6"
            placeholder="Password"
            required
          />
          <input
            type="email"
            className="inputs"
            id="mail"
            placeholder="Email Address"
            required="required"
          />
          <div id="checkBoxBlock">
            <div id="newsletter">
              <input className="checkB" name="newsletter" type="checkbox" />
              <label htmlFor="newsletter">Newsletter</label>
            </div>
            <div id="rules">
              <input className="checkB" name="rules" type="checkbox" />
              <a onClick={handleCheckboxClick}>Rules</a>
            </div>
          </div>
          <input type="submit" className="inputs" id="submit" value="Sign in" />
        </form>
      </div>
      <Popup handleClose={handleClosePopup} show={showPopup} />
    </>
  )
}

export default Form