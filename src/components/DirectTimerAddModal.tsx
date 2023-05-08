import { createPortal } from 'react-dom';
import './DirectTimerAddModal.css';

// TODO: 추후 모달 구조 변경 논의
const DirectTimerAddModal = () => {
  return createPortal(
    <div className="modal-backdrop">
      <div></div>
      <div className="modal-backdrop-main">
        <div className="timer-modal">모달임 ㅇㅇㅇㅇㅇ</div>
      </div>
      <div></div>
    </div>,
    document.body
  );
};

export default DirectTimerAddModal;
