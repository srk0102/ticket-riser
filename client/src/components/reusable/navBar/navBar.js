import React from 'react'
import { Link } from 'react-router-dom'
import "./navBar.css"

export function NavBar(props) {

  const {items, addClassToNav} = props

  return (
    <>
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark "+ addClassToNav}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              {
                items?.map((e) =>
                  <Link className="nav-link" to={e}>{e}</Link>
                )
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
