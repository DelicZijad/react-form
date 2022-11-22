import React from 'react'

const Modal = (props) => {
    const {openModal,closeModalHandler}=props
  return (
    <div className={`modal--overlay ${openModal ? ' ':'hide'}`}>
        <div className="modal--window">
            <p className="modal--txt">Congratulations on signing up to our page.</p>
            <button onClick={closeModalHandler} className="modal--btn">OK</button>
        </div>
    </div>
  )
}

export default Modal