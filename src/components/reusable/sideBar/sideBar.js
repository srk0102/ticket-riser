import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./sideBar.css"

//Importing npm dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/**
 * ANCHOR COMPLETE THIS
 * @param {*} props
 * @returns
 */
export function SideBar(props) {

  const { className, menuIcons, menuItems } = props

  const [menu, setMenu] = useState(false)
  const [width, setWidth] = useState("200px")

  /**
   *
   */
  const collapsedState = () => {
    setMenu(false)
    setWidth("200px")
  }

  /**
   *
   */
  const expandedState = () => {
    setMenu(true)
    setWidth("50px")
  }

  return (
    <>
      <div className={"border-end border-dark bg-dark text-light border-3 p-3 " + className} style={{ width: width, transition: "all 200ms ease-in-out", height: "100vh" }}>
        {
          menu === true ? (
            <>
              <div className="text-end" style={{ height: "100%" }}>
                <div>
                  <i className="fas fa-bars" onClick={() => collapsedState()}></i>
                </div>
                <div className="d-flex flex-column justify-content-between" style={{ height: "95%" }}>
                  <div className="d-flex flex-column justify-content-center mt-5">
                    {
                      menuIcons?.map((e) =>
                        <>
                          <Link to="#" className="mt-3"><FontAwesomeIcon icon={e} /></Link>
                        </>
                      )
                    }
                  </div>
                  <div className="profile text-light">
                    <h1>d</h1>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-end vd-flex flex-column justify-content-between" style={{ height: "100%" }}>
                <div>
                  <i className="fas fa-arrow-left" onClick={() => expandedState()}></i>
                </div>
                <div>

                </div>
                <div className="profile">

                </div>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}
