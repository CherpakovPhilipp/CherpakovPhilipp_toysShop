import { IoMdClose } from 'react-icons/io';

import ReactModal from 'react-modal';

export const Modal = ({ open, close, title, children, onConfirm }) => {
  const onOk =() => {
    onConfirm();
    close();
  }

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  return (
    <>
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      style={customStyles}
    >
      <h2>{title}</h2>
      <span onClick={close}><IoMdClose /></span>
      <div>{children}</div>

      <div className="buttons">
        <button onClick={onOk}>Ok</button>
        <button onClick={close}>Cancel</button>
      </div>
    </ReactModal>
  </>
  );
};

Modal.defaultprops = {
  title: 'Warning'
}
