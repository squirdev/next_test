import React, { useState, FC } from "react";
import Modal from "react-modal";
import { Inter } from 'next/font/google'
import TextField from '@/components/TextField/TextField';
import styles from "../home/main.module.css";
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] })

// type ModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
// }

// Modal.setAppElement('div');
const EnterModal = (props: any) => {


  const [textValue, setTextValue] = useState("");
  const handleChange = (e: any): void => {
    setTextValue(e.target.value)
  }
  const router = useRouter();
  function handleBackClick() {
    router.back();
  }
  return (
    <div className={styles.EnterModal}>

      <div>
        <div className={styles.ModalHead}>
          <h1 className={styles.ModalName}>詳細 (車両のナンバーなどの個人情報は入力しないでください)</h1>
        </div>
        <div>
          <TextField
            multiline
            value={textValue}
            characterCount
            maxLength={50}
            id="modal-text-field"
            onChange={handleChange}
          />
        </div>
        <div className={styles.Content}>
          <button onClick={handleBackClick}>完了</button>
        </div>
      </div>
    </div>
  )
}

export default EnterModal;