function Modal(props) {
  function cancelHander() {
    props.onCancel();
  }
  function confirmHaandler() {
    props.onConfirm();
  }

  return (
    <div>
      <div className="modal">
        <p>
          <b>Are you sure?</b>
        </p>
        <button className="btn1" onClick={cancelHander}>
          Cancel
        </button>
        <button className="btn2" onClick={confirmHaandler}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default Modal;
