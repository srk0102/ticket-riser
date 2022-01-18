import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

//Importing local components
import { CustomInput, SmallLogo } from "../../../reusable"

//TODO - Need to Complete login function and validate email and password using db.
/**
 * @param {String} CompanyName You can give company name as a string.
 * @param {Url} logo you can give your logo as url
 */
export function Login(props) {

  const { CompanyName, Logo } = props

  const [Email, setEmail] = useState()
  const [EmailError, setEmailError] = useState("")
  const [password, setPassword] = useState()
  const [PasswordError, setPasswordErr] = useState("")

  /**
   * This function will validate the email type.
   * It will also check wether email is in database or not.
   * @param {Object} event this will contain input event trigger object
   */
  const validateEmail = (event) => {
    let val = event.target.value
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(val).toLowerCase())) {
      setEmailError("*Please enter a valid email")
    }
    else {
      setEmailError("")
      setEmail(val)
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
                <CustomInput label="Email" theme="black" type="email" err={EmailError} onChange={(event) => (validateEmail(event))} />
                <CustomInput label="Password" theme="black" type="password" err={PasswordError} onChange={(event) => (validatePassword(event))} />
                <div className="d-flex flex-column align-items-end p-3">
                  <Link to="#" className="link-dark">Forgot Password ?</Link>
                  <Link to="signup" className="link-dark mt-1">New User ?</Link>
                </div>
                <div className="d-flex flex-row justify-content-center">
                  <button className="btn btn-dark">LOGIN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
