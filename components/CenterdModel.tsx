import { CloseButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Crosshair } from "react-feather";
interface ExpenseModelProps{
  title?:string;
  show:boolean;
  onHide:any;
  children:JSX.Element
}

const CenteredModel = ({title,show,onHide,children}:ExpenseModelProps) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <CloseButton onClick={onHide} className="position-absolute top-0 start-100 translate-middle border border-light rounded-circle bg-white p-1"/>
      {children}
      </Modal.Body>
    </Modal>
  );
};

export default CenteredModel;
