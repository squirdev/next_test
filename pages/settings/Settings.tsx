import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import EnterDetails from './EnterDetails';
import styles from "./settings.module.css";
import { useRouter } from "next/router";
import NationwideModal from './NationwideModal';



const PinSetting = (props: any) => {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    setOpen(props.open)
  }, [props])

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const [isOpenNationModal, setIsOpenNationModal] = useState(false);
  const handleOpenNaitonModal = () => setIsOpenNationModal(true);
  const handleCloseNationModal = () => setIsOpenNationModal(false);

  const router = useRouter();

  const goSecond = () => {
    router.push('../home/Second');
  }
  return (
    <>
      {
        <div className={styles.pinSetting}>
          <div>
            <h1>設定したエリアにピンが立った時に通知が届きます</h1>
            <div>
              <div className={styles.allarea} onClick={handleOpenModal}>
                <span>全国</span>
                <FontAwesomeIcon className={styles.icon} icon={faCaretDown} onClick={handleOpenNaitonModal} />
              </div>
              <NationwideModal isOpen={isOpenNationModal} onClose={handleCloseNationModal} />
              <div className={styles.detail} onClick={handleOpenModal}>
                <span>詳細</span>
                <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </div>
              <div className={styles.notice} onClick={handleOpenModal}>
                <span>通知</span>
                <label className={styles.toggle}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <button className={styles.reset} onClick={handleOpenModal}>設定をリセットする</button>
            </div>

            <div className={styles.btn}>
              <button className={styles.addHome}>ホーム画面に追加</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}
export default PinSetting