import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
      <Modal.Body className="p-0 ">
      {children}
      </Modal.Body>
    </Modal>
  );
};

export default CenteredModel;
