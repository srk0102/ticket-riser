import React from 'react'
import { Link } from 'react-router-dom'
import "./breadCrumb.css"

//Importing npm dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export function BreadCrumb(props) {

  const {className} = props

  const link = window.location.pathname;
  var breads = link.split("/").filter(function (entry) { return entry.trim() !== ''; })

  return (
    <>
      <div className={"bread d-flex flex-row " + className}>
        {
          breads?.map((e) =>
            <>
              <div className="d-flex flex-row justify-content-start align-items-center">
                <Link to={"#"} className="fw-bold text-decoration-none text-secondary mx-2">{e}</Link>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </>
          )
        }
      </div>
    </>
  )
}
