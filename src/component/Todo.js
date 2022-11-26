import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [showModal, setshowModal] = useState(false);

  function deleteHandler() {
    setshowModal(true);
  }
  function closeModalHander() {
    setshowModal(false);
    console.log("clicked");
  }
  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Backdrop onCancel={closeModalHander} />}
      {showModal && (
        <Modal onCancel={closeModalHander} onConfirm={closeModalHander} />
      )}
    </div>
  );
}
export default Todo;
