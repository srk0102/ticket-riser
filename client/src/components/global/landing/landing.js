
import React from 'react'
import "./landing.css"

//Importing reusable components from
import { NavBar } from "../../../reusable"

export function Landing() {

  let items = ["Login", "Signup"]

  return (
    <>
      <NavBar items={items} />
    </>
  )
}
