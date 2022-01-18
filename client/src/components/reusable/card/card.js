import React from 'react'
import "./card.css"

/**
 * ANCHOR DO THIS
 * @param {*} props
 * @returns
 */
export function Card(props) {
  const { cardTheme, cardTitle, cardDescription, cardFooter, cardBorder, BorderColor, className, titleColor, descriptionColor, footerColor, onClick } = props
  return (
    <>
      <div className={"p-1 " + className} onClick={onClick}>
        <div className="card p-2" style={{ border: cardBorder, borderColor: BorderColor ? BorderColor : cardTheme }}>
          <h5 className="card-title" style={{ color: titleColor ? titleColor : cardTheme }}>{cardTitle}</h5>
          <h1 className="card-description text-center" style={{ color: descriptionColor ? descriptionColor : cardTheme }}>{cardDescription}</h1>
          <p className="card-Footer text-primary fw-bold" style={{ color: footerColor ? footerColor : cardTheme, fontSize: "12px" }}>{cardFooter}</p>
        </div>
      </div>
    </>
  )
}
