import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "./signUp.css"

//Importing Utilities
import { validate } from "../../../utilities/validate"

//Importing local components
import { CustomInput, SmallLogo } from "../../../reusable"

export function SignUp(props) {

  const { CompanyName, Logo } = props

  const [userName, setUserName] = useState()
  const [userNameErr, setUserNameErr] = useState()
  const [email, setEmail] = useState()
  const [emailErr, setEmailErr] = useState()
  const [password, setPassword] = useState()
  const [passwordErr, setPasswordErr] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [confirmPasswordErr, setConfirmPasswordErr] = useState()


  /**
   * This function will validate the email type.
   * It will also check wether email is in database or not.
   * @param {Object} event this will contain input event trigger object
   */
  const validateEmail = (event) => {
    let val = event.target.value
    if (validate(val, "email") === false) {
      setEmailErr("*Please enter valid email")
    }
    else {
      setEmailErr("")
      setEmail(val)
    }
  }

  const validateUserName = (event) => {
    let val = event.target.value
    if (validate(val, "userName") === false) {
      setUserNameErr("*Please enter valid User Name")
    }
    else {
      setUserName(val)
      setUserNameErr("")
    }
  }

  /**
   * Validates password if its correct or not.
   * @param {Object} event 
   */
  const validatePassword = (event) => {
    let val = event.target.value
    if (validate(val, "password") === false) {
      setPasswordErr("*Please enter a valid password")
    }
    else {
      setPasswordErr("")
      setPassword(val)
    }
  }

  /**
  * 
  */
  const validateConfirmPassword = (event) => {
    let val = event.target.value
    if (val !== password) {
      setConfirmPasswordErr("*confirm password should match with password")
    }
    else {
      setConfirmPasswordErr("")
      setConfirmPassword(val)
    }
  }

  /**
   * 
   */
  const submitDetails = () => {

  }


  return (
    <>
      <div style={{ height: "100vh" }} className="d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row justify-content-center p-3 p-sm-0">
            <div className="card col-12 text-center p-2 d-md-flex flex-md-row">
              <div className="col-md-6 d-md-flex flex-md-column justify-content-center align-items-center">
                <SmallLogo Url={Logo} name={CompanyName} />
                <h1 className="fw-bold fs-1 text-uppercase">{CompanyName ? CompanyName : "Add Task"}</h1>
              </div>
              <div className="col-md-6 p-md-3">
                <CustomInput label="User Name" type="text" theme="black" err={userNameErr} onChange={(event) => validateUserName(event)} />
                <CustomInput label="Email" type="email" theme="black" err={emailErr} onChange={(event) => validateEmail(event)} />
                <CustomInput label="Password" type="password" err={passwordErr} theme="black" onChange={(event) => validatePassword(event)} />
                <CustomInput label="Confirm Password" type="password" err={confirmPasswordErr} theme="black" onChange={(event) => validateConfirmPassword(event)} />
                <div className="d-flex flex-column align-items-end p-3">
                  <Link to="#" className="link-dark">Already Registered?</Link>
                </div>
                <div className="d-flex flex-row justify-content-center">
                  <button className="btn btn-dark">SIGN UP</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
