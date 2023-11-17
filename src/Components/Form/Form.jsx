import './Form.scss'
import Popup from './Popup'
import { useState } from 'react'

const Form = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [data, setData] = useState({
    firstName: '',
    newName: '',
    password: '',
    mail: '',
    newsletter: false,
    rules: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { firstName, newName, password, mail, newsletter, rules } = data
    const bigData = { firstName, newName, password, mail, newsletter, rules }
    console.log(bigData)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))


  }

  const handleCheckboxClick = () => {
    setShowPopup(!showPopup)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="formulaire">
      <form onSubmit={handleSubmit}>
        <input
          className="formulaire-texte"
          type="text"
          name="firstName"
          onChange={handleChange}
          value={data.firstName}
          placeholder="First Name"
          required
        />
        <input
          className="formulaire-texte"
          type="text"
          name="newName"
          onChange={handleChange}
          value={data.newName}
          placeholder="New Name"
          required
        />
        <input
          className="formulaire-texte"
          type="password"
          name="password"
          onChange={handleChange}
          value={data.password}
          minLength="6"
          placeholder="Password"
          required
        />
        <input
          className="formulaire-texte"
          type="email"
          name="mail"
          onChange={handleChange}
          value={data.mail}
          placeholder="Email Address"
          required
        />
        <div className="formulaire-checkBox">
          <input
            className="formulaire-check"
            name="newsletter"
            type="checkbox"
            onChange={handleChange}
            checked={data.newsletter}
          />
          <label htmlFor="newsletter">Newsletter</label>

          <input
            className="formulaire-check"
            name="rules"
            type="checkbox"
            onChange={handleChange}
            checked={data.rules}
          />
          <label htmlFor="rules">
            <a onClick={handleCheckboxClick}>Rules</a>
          </label>
        </div>
        <button type="submit">{`S'inscrire`}</button>
      </form>
      <Popup handleClose={handleClosePopup} show={showPopup} />
    </div>
  )
}

export default Form
