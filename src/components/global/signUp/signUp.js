import React, { useState } from 'react'
import "./signUp.css"

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
  const [confirmPasswordErr, setconfirmpasswordErr] = useState()


  /**
   * This function will validate the email type.
   * It will also check wether email is in database or not.
   * @param {Object} event this will contain input event trigger object
   */
  const validateEmail = (event) => {
    let val = event.target.value
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(val).toLowerCase())) {
      setEmailErr("*Please enter valid email")
    }
    else {
      setEmailErr("")
      setEmail(val)
    }
  }

  const validateUserName = (event) => {
    let val = event.target.value
    if (val === "") {
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
    if (val === "") {
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
    if(val !== password){
      setconfirmpasswordErr("*confirm password should match with password")
    }
    else{
      setconfirmpasswordErr("")
    }
  }


  return (
    <>
      <div style={{ height: "100vh" }} className="d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row justify-content-center p-3 p-sm-0">
            <div className="card col-12 col-md-6 col-xl-4 text-center p-2">
              <SmallLogo Url={Logo} name={CompanyName} />
              <h1 className="fw-bold fs-1 text-uppercase">{CompanyName ? CompanyName : "Add Task"}</h1>
              <CustomInput label="User Name" type="text" theme="black" err={userNameErr} onChange={(event) => validateUserName(event)} />
              <CustomInput label="Email" type="email" theme="black" err={emailErr} onChange={(event) => validateEmail(event)} />
              <CustomInput label="Password" type="password" err={passwordErr} theme="black" onChange={(event) => validatePassword(event)} />
              <CustomInput label="Confirm Password" type="password" err={confirmPasswordErr} theme="black" onChange={(event) => validateConfirmPassword(event)}/>
              <div className="d-flex flex-row justify-content-center">
                <button className="btn btn-dark">SIGN UP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
