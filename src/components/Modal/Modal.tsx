/** @format */

import { FC } from "react";
import { ImCross } from "react-icons/im";
import ModalComponent from "./ModalComponent";
import "./modalStyles/Modal.css";

type Props = { open: boolean; closeButton: any };

const Modal: FC<Props> = ({ open, closeButton }) => {
  if (!open) return null;
  return (
    <div>
      <ImCross onClick={closeButton} className='closeModal' />
      <ModalComponent />
    </div>
  );
};

export default Modal;
