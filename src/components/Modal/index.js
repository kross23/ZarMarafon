import {useRef} from 'react';
import clnm from 'classnames';
import sv from './style.module.css';
const Modal = ({title,children, onClouseModal, isOpen }) => {
const modalEl = useRef();



const handleClouseModal = () => {
    onClouseModal && onClouseModal(false);
}
const handleClickRoot = (e) => {
    if(!modalEl.current.contains(e.target)){
        onClouseModal();
    }
}

    return(
<div className={clnm(sv.root,{ [sv.open]:isOpen })}
onClick={handleClickRoot}>
    <div className={sv.modal}  ref={modalEl}>
        <div className={sv.head}>
						{ title}
            <span className={sv.btnClose}
            onClick={handleClouseModal}
            ></span>
        </div>
        <div className={sv.content}>
            {children}
        </div>
    </div>
</div>
    );
};
export default Modal;