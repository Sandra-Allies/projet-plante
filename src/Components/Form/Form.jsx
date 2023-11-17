import './Form.scss'
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
    <div className="formulaire">
      <form>
        <input className="formulaire-texte"
          type="text"
          id="fName"
          placeholder="First Name"
          required="required"
        />
        <input className="formulaire-texte"
          type="text"
          id="nName"
          placeholder="New Name"
          required="required"
        />
        <input className="formulaire-texte"
          type="password"
          id="pass"
          minLength="6"
          placeholder="Password"
          required
        />
        <input className="formulaire-texte"
          type="email"
          id="mail"
          placeholder="Email Address"
          required="required"
        />
        <div className="formulaire-checkBox">
          <input className="formulaire-check"
            name="newsletter" type="checkbox" />
          <label htmlFor="newsletter">Newsletter</label>

          <input className="formulaire-check"
            name="rules" type="checkbox" />
          <label htmlFor="rules">
            <a onClick={handleCheckboxClick}>Rules</a>
          </label>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <Popup handleClose={handleClosePopup} show={showPopup} />
    </div>
  )
}

export default Form