import React, { useState, FC } from "react";
import Modal from "react-modal";
import { Inter } from 'next/font/google'
import styles from "../auth/auth.module.css"

const inter = Inter({ subsets: ['latin'] })

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

Modal.setAppElement('div');
const DeleteModal: FC<ModalProps> = ({ isOpen, onClose }) => {


  const [textValue, setTextValue] = useState("");
  const handleChange = (e: any): void => {
    setTextValue(e.target.value)
    console.log("This is calling");
  }

  return (
    <div>
      <main className={`relative flex flex-col items-center justify-between ${inter.className}`}>
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          contentLabel="Delete Modal"
          className={styles.DeleteModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }
          }}
        >
          <div className={styles.DeleteHead}>
            <h1 className={styles.DeleteName}>このピンを削除しますか？</h1>
            <h2>削除すると復元することはできません</h2>
          </div>
          <div>

          </div>
          <div className={styles.Content}>
            <button>削除する</button>
            <span onClick={onClose}>キャンセル</span>
          </div>
        </Modal>
      </main>
    </div>
  )
}

export default DeleteModal;