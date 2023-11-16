import React, { useState } from "react";
import style from "./Form.css";
import LoremIpsum from "./LoremIpsum";

const bigData = {
  firstName: "",
  newName: "",
  password: "",
  mail: "",
};

const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    newName: "",
    password: "",
    mail: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeF = (e) => {
    setData((prev) => ({ ...prev, firstName: e.target.value }));
    console.log(bigData);
  };
  const handleChangeN = (e) => {
    setData((prev) => ({ ...prev, newName: e.target.value }));
    console.log(bigData);
  };
  const handleChangeP = (e) => {
    setData((prev) => ({ ...prev, password: e.target.value }));
    console.log(bigData);
  };
  const handleChangeM = (e) => {
    setData((prev) => ({ ...prev, mail: e.target.value }));
    console.log(bigData);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputs"
            id="fName"
            onChange={handleChangeF}
            value={data.firstName}
            placeholder="First Name"
            required="required"
          />
          <input
            type="text"
            className="inputs"
            id="nName"
            onChange={handleChangeN}
            value={data.newNameName}
            placeholder="New Name"
            required="required"
          />
          <input
            type="password"
            className="inputs"
            id="pass"
            onChange={handleChangeP}
            value={data.password}
            minLength="6"
            placeholder="Password"
            required
          />
          <input
            type="email"
            className="inputs"
            id="mail"
            onChange={handleChangeM}
            value={data.mail}
            placeholder="Email Address"
            required="required"
          />
          <div id="checkBoxBlock">
            <div id="newsletter">
              <input className="checkB" name="newsletter" type="checkbox" />
              <label htmlFor="newsletter">NEWSLETTER</label>
            </div>
            <div id="rules">
              <input className="checkB" name="rules" type="checkbox" />
              <label htmlFor="rules">RULES</label>
            </div>
          </div>
          <input type="submit" className="inputs" id="submit" value="Sign in" />
        </form>
      </div>
    </>
  );
};

export default Form;
