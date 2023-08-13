import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

// const popupRoootElement = document.querySelector("#popup");

// export function Popup({ children, marker }) {
//   const element = useMemo(() => {
//     const element = document.createElement("div");
//     element.dataset.marker = marker;
//     return element;
//   }, [marker]);

//   useEffect(() => {
//     popupRoootElement.appendChild(element);

//     return () => {
//       popupRoootElement.removeChild(element);
//     };
//   }, []);

//   return createPortal(children, element);
// }

const portal = document.getElementById("popup");

export const Popup = ({ itemForModal, onFormOpen }) =>
  createPortal(
    <div
      onClick={() => {
        onFormOpen(false);
      }}
      className="popup__dialog"
    >
      <div className="popup__content">
        <div className="popup__header">
          <button
            href="#close"
            title="Close"
            className="popup__close"
            onClick={() => {
              onFormOpen(false);
            }}
          >
            ×
          </button>
        </div>
        <div className="popup__body">
          <div className="popup__wrp-img">
            <img className="popup__img" src={itemForModal.thambnail} alt="" />
          </div>
          <div className="popup__name">{itemForModal.name}</div>
          <div className="popup__descr">{itemForModal.description}</div>
        </div>
      </div>
    </div>,
    portal
  );
