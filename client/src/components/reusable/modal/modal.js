import React from 'react'
import "./modal.css"

export function TicketModal(props) {
  const { modelTitle, modalButton,submitName, className } = props
  return (
    <>
      <button type="button" className={"btn btn-primary fw-bold " + className} data-bs-toggle="modal" data-bs-target="#exampleModal">{modalButton?modalButton:"Raise Ticket"}</button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{modelTitle?modelTitle:"..."}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Title</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Description:</label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
                <input type="file" class="form-control"></input>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">{submitName?submitName:"Submit"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
