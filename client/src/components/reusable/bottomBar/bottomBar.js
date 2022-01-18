import React from 'react'
import { Link } from 'react-router-dom'
import "./bottomBar.css"

//Importing npm dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 *ANCHOR COMPLETE THIS
 * @param {*} props
 * @returns
 */
export function BottomBar(props) {
  const { items, className } = props

  return (
    <>
      <div className={"bg-dark text-light fixed-bottom d-flex flex-row justify-content-between justify-content-md-around align-items-center " + className}>
        {items?.map((e) =>
          <>
            <Link to="#" className=""><FontAwesomeIcon icon={e} /></Link>
          </>
        )}
        <div className="profile">
          <h1>d</h1>
        </div>
      </div>
    </>
  )
}
