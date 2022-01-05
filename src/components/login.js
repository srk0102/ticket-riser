import React, { useState } from 'react'

//Import reusable components from local reusable folder
import Custominput from './reusable/custominput/custominput'

export default function Login() {

  const [user, setUser] = useState()
  const [userErr, setUserErr] = useState("")
  const [password, setPassword] = useState()
  const [passwordErr, setPasswordErr] = useState("")
  const [sbtErr, setSubErr] = useState("")

  /**
   * 
   * @param {Object} event 
   */
  const userNameField = (event) => {
    let val = event.target.value
    if (val) {
      setUserErr("")
      setUser(val)
    }
    else {
      setUserErr("*Please fill this filed")
    }
  }

  /**
   * 
   * @param {Object} event 
   */
  const passwordField = (event) => {
    let val = event.target.value
    if (val) {
      setPasswordErr("")
      setPassword(val)
    }
    else {
      setPasswordErr("*Please fill this filed")
    }
  }

  const submit = () => {
    if(user && password) {
      setSubErr("")
    }
    else{
      setSubErr("Please fill this filed")
    }
  }

  return (
    <>
      <div className="container">
        <div className="row d-flex flex-row justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="card col-12 col-md-6 p-3">
            <h1 className="fw-bold text-center">LOGIN</h1>
            <Custominput theme="black" label="USER NAME" type="text" err={userErr ? userErr : sbtErr} onChange={(event) => userNameField(event)} />
            <Custominput theme="black" label="PASSWORD  " type="password" err={passwordErr ? passwordErr : sbtErr} onChange={(event) => passwordField(event)} />
            <div className="d-flex flex-row justify-content-center">
              <button className="btn btn-dark" onClick={submit}>LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
