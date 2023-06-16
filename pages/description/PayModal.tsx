import React, { useState } from "react";
import ReactModal from "react-modal";
import { X } from 'react-feather';
import styles from "../auth/auth.module.css"

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}
const PayModal = ({ isOpen, onClose }: ModalProps) => {
  const [inputVal, setInputVal] = useState("");
  const changeInput = (e: any) => {
    setInputVal(e.target.value)
    console.log("this is input value", e.target.value)
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      className={styles.Main}
    >
      <div className={styles.Head}>
        <h1 className={styles.Name}>ログイン</h1>
        <X className={styles.CrossButton} onClick={onClose}></X>
      </div>
      <div className={styles.Content}>
        <input placeholder="..." type="text" value={inputVal} onChange={changeInput} />
        <button>次へ</button>
      </div>
    </ReactModal>
  )
}

export default PayModal;