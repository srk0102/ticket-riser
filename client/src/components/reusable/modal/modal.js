import React, { useState } from 'react'
import "./modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export function TicketModal(props) {
  const { modelTitle, modalButton, submitName, addClassToTicketModal } = props

  const [show, setShow] = useState(false)

  const open = () => {
    setShow(true)
  }

  const close = () => {
    setShow(false)
  }

  const submit = () => {

  }

  return (
    <>
      <button className="btn btn-primary" onClick={open}>{modalButton ? modalButton : "Modal"}</button>

      {
        show ? (
          <>
            <div className="ticketModal">
              <div className="card ticket">
                <div className="card-header d-flex flex-row justify-content-between">
                  <h1>{modelTitle ? modelTitle : "..."}</h1>
                  <button className="btn btn-danger" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
                </div>
                <div className="card-body">
                  <input className="form-control mb-3" type="text" placeholder="Title" />
                  <textarea className="form-control mb-3" placeholder="Description" />
                  <input className="form-control"type="file"/>
                </div>
                <div className="card-footer d-flex flex-row justify-content-end">
                  <button className="btn btn-danger mx-2" onClick={close}>Close</button>
                  <button className="btn btn-primary" onClick={submit}>Submit</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
          </>
        )
      }
    </>
  )
}
