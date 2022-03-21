import "./index.scss";
import Form from "./Form";
import clsx from "clsx";
export default function Modal({ detail, isOpen, onSetIsOpen }) {
  const classes = clsx({
    active: isOpen,
  });
  return (
    <div className="modal">
      <div
        className={`modal-overlay ${classes}`}
        onClick={() => onSetIsOpen(false)}
      ></div>
      <div className={`modal-container ${classes}`}>
        <div className="modal-container-title">
          <div className="btn-close" onClick={() => onSetIsOpen(false)}></div>
        </div>
        <div className="modal-container-body">
          <Form detail={detail} />
        </div>
        <div className="modal-container-footer"></div>
      </div>
    </div>
  );
}
