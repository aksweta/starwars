import React from "react";
import "./modal.css";

const Modal = ({ handleCloseClick }) => {

    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={handleCloseClick}>
            &times;
          </span>
         <h1>This is popup</h1>
        </div>
      </div>
    );
}

export default Modal;