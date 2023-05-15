import { createPortal } from 'react-dom';
import './DirectTimerAddModal.css';
import { useRef } from 'react';

interface DirectTimerAddModalProps {
  isOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const DirectTimerAddModal = ({ isOpenModal, setTime }: DirectTimerAddModalProps) => {
  const hourRef = useRef<HTMLInputElement>(null);
  const minRef = useRef<HTMLInputElement>(null);
  const secRef = useRef<HTMLInputElement>(null);

  return createPortal(
    <>
      <div
        className="modal-backdrop"
        onClick={() => {
          isOpenModal(false);
        }}
      ></div>

      <div className="timer-modal">
        <h2 className="modal-header">시간 추가</h2>
        <div className="timer-modal-main-box">
          <div className="set-datas">
            <span>시간</span>
            <span> : </span>
            <span>분</span>
            <span> : </span>
            <span>초</span>
          </div>
          <div className="set-datas">
            <input ref={hourRef} defaultValue="0" type="number" min="0" max="99" />
            <span> :</span>
            <input ref={minRef} defaultValue="0" type="number" min="0" max="59" />
            <span> :</span>
            <input ref={secRef} defaultValue="0" type="number" min="0" max="59" />
          </div>
          <button
            type="button"
            className="time-add-button"
            onClick={() => {
              if (!hourRef.current || !minRef.current || !secRef.current) return;
              const hourToSec = +hourRef.current.value * 3600;
              const minToSec = +minRef.current.value * 60;
              const sec = +secRef.current.value;
              setTime((secTime) => secTime + hourToSec + minToSec + sec);
              isOpenModal(false);
            }}
          >
            추가
          </button>
        </div>
      </div>
    </>,
    document.body
  );
};

export default DirectTimerAddModal;
