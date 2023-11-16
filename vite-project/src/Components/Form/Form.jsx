import React from "react";
import style from "./Form.css";
import LoremIpsum from "./LoremIpsum";

const Form = () => {
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
            minlength="6"
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
              <label for="newsletter">NEWSLETTER</label>
            </div>
            <div id="rules">
              <input className="checkB" name="rules" type="checkbox" />
              <label for="rules">RULES</label>
            </div>
          </div>
          <input type="submit" className="inputs" id="submit" value="Sign in" />
        </form>
      </div>
    </>
  );
};

export default Form;
