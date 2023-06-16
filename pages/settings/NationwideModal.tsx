import React, { useState, FC } from "react";
import Modal from "react-modal";
import { Inter } from 'next/font/google'
import styles from "./settings.module.css";
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const inter = Inter({ subsets: ['latin'] })

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

Modal.setAppElement('div');
const NationwideModal: FC<ModalProps> = ({ isOpen, onClose }) => {

  const [is1Checked, setIs1Checked] = useState(false);

  const handle1Check = (event: any) => {
    setIs1Checked(event.target.checked);
  };
  const [is2Checked, setIs2Checked] = useState(false);

  const handle2Check = (event: any) => {
    setIs2Checked(event.target.checked);
  };
  const [is3Checked, setIs3Checked] = useState(false);

  const handle3Check = (event: any) => {
    setIs3Checked(event.target.checked);
  };
  const [is4Checked, setIs4Checked] = useState(false);

  const handle4Check = (event: any) => {
    setIs4Checked(event.target.checked);
  };
  const [is5Checked, setIs5Checked] = useState(false);

  const handle5Check = (event: any) => {
    setIs5Checked(event.target.checked);
  };
  const [is6Checked, setIs6Checked] = useState(false);

  const handle6Check = (event: any) => {
    setIs6Checked(event.target.checked);
  };
  const [is7Checked, setIs7Checked] = useState(false);

  const handle7Check = (event: any) => {
    setIs7Checked(event.target.checked);
  };


  return (
    <div>
      <main className={`relative flex flex-col items-center justify-between ${inter.className}`}>
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          contentLabel="Nationwide Modal"
          className={styles.NationwideModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }
          }}
        >
          <div className={styles.ModalHead}>
            <h1>１つ以上チェックを入れてください</h1>
          </div>
          <div className={styles.Nation}>
            <div className={styles.Check}>
              <Checkbox checked={is1Checked} onChange={handle1Check} />
              <label className={styles.Label}>Nation1</label>
            </div>
            <FontAwesomeIcon className={styles.ModalIcon} icon={faChevronRight} />
          </div>
          <div className={styles.Nation}>
            <div className={styles.Check}>
              <Checkbox checked={is2Checked} onChange={handle2Check} />
              <label className={styles.Label}>Nation2</label>
            </div>
            <FontAwesomeIcon className={styles.ModalIcon} icon={faChevronRight} />
          </div>
          <div className={styles.Nation}>
            <div className={styles.Check}>
              <Checkbox checked={is3Checked} onChange={handle3Check} />
              <label className={styles.Label}>Nation3</label>
            </div>
            <FontAwesomeIcon className={styles.ModalIcon} icon={faChevronRight} />
          </div>
          <div className={styles.Nation}>
            <div className={styles.Check}>
              <Checkbox checked={is4Checked} onChange={handle4Check} />
              <label className={styles.Label}>Nation4</label>
            </div>
            <FontAwesomeIcon className={styles.ModalIcon} icon={faChevronRight} />
          </div>
          <div className={styles.Nation}>
            <div className={styles.Check}>
              <Checkbox checked={is5Checked} onChange={handle5Check} />
              <label className={styles.Label}>Nation5</label>
            </div>
            <FontAwesomeIcon className={styles.ModalIcon} icon={faChevronRight} />
          </div>
          <div className={styles.Nation}>
            <div className={styles.Check}>
              <Checkbox checked={is6Checked} onChange={handle6Check} />
              <label className={styles.Label}>Nation6</label>
            </div>
            <FontAwesomeIcon className={styles.ModalIcon} icon={faChevronRight} />
          </div>
          <div className={styles.Nation}>
            <div className={styles.Check}>
              <Checkbox checked={is7Checked} onChange={handle7Check} />
              <label className={styles.Label}>Nation7</label>
            </div>
            <FontAwesomeIcon className={styles.ModalIcon} icon={faChevronRight} />
          </div>
          <div className={styles.Modalbtn}>
            <button onClick={onClose}>閉じる</button>
          </div>
        </Modal>
      </main>
    </div>
  )
}

export default NationwideModal;