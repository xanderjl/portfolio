import React, { useState, useEffect, useRef } from "react"

const Modal = ({ children }) => {
  const [modal, setModal] = useState(false)
  const modalRef = useRef()
  useEffect(() => {
    if (!modal) {
      modalRef.current.focus()
    }
  })

  return (
    <div className={modal ? "modal" : "modal is-active"}>
      <div
        role="button"
        ref={modalRef}
        tabIndex={-1}
        className="modal-background"
        onClick={() => setModal(!modal)}
        onKeyDown={e => (e.key === "Escape" ? setModal(!modal) : null)}
      ></div>
      <div className="modal-content">
        <div className="card">
          <div className="card-content">
            <div className="content">
              {children}
              <button
                className="button is-primary is-radiusless"
                onClick={() => setModal(!modal)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        onClick={() => setModal(!modal)}
      ></button>
    </div>
  )
}

export default Modal
