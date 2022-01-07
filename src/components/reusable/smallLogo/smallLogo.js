import React from 'react'
import "./smallLogo.css"

/**
 * @param {Url} Url you can give img Url into this.
 * @param {String} name you can give company name to this fol alternative purpose if img is not loaded.
 * @returns jsx component of logo with rounded design.
 */
export function SmallLogo(props) {
  const { Url, name } = props
  return (
    <>
      <div className="d-flex flex-row justify-content-center">
        <img className="logo" style={{height:"50px", width:"50px"}} src={Url} alt={name} />
      </div>
    </>
  )
}
