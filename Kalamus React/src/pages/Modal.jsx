
const Modal = ({ show, handleClose }) => {
    const showHideClassName = show ? "modal fade show" : "modal fade";

    return (
        <div className={showHideClassName} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" onClick={handleClose} aria-label="Cofnij"></button>
                    </div>
                    <div className="modal-body">
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose} data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Wyjdü</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;