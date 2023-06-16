import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import EnterModal from './EnterModal';
import styles from "./main.module.css";
import { useRouter } from "next/router";
const PinSetting = (props: any) => {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    setOpen(props.open)
  }, [props])

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  const router = useRouter();

  const goSecond = () => {
    router.push('../home/Second');
  }
  const goHome = () => {
    router.push('../home');
  }
  const goThird = () => {
    router.push('../home/Third');
  }

  return (
    <>
      {
        // open ? (
        <div className={styles.pinSetting}>
          <div>
            <h1 className={styles.subtitle}>ピンを設定</h1>
            <div>
              <div className={styles.evenRow}>
                <FontAwesomeIcon className={styles.settingIcon} icon={faMapMarkerAlt} />
                <span>鹿児島県鹿児島市真砂町54-3</span>
                {/* <span className={styles.edit} onClick={goSettings}>編集</span> */}
              </div>
              <div className={styles.evenRow}>
                <FontAwesomeIcon className={styles.settingIcon} icon={faClock} />
                <span>2023/05/15  10:15</span>
              </div>
              <div className={styles.row}>
                <FontAwesomeIcon className={styles.settingIcon} icon={faCommentDots} />
                <span>詳細（任意）</span>
                <span className={styles.edit} onClick={goThird}>入力</span>
              </div>
              {/* <EnterModal isOpen={isOpenModal} onClose={handleCloseModal} /> */}
              <div className={styles.row}>
                <FontAwesomeIcon className={styles.settingIcon} icon={faEye} />
                <span>ピンを公開する</span>
                <label className={styles.toggle}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>

              </div>
            </div>

            <div className={styles.btn}>
              <button className={styles.setPin} onClick={goSecond}>ピンを設置</button>
              <button className={styles.next} onClick={goHome} >戻る</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default PinSetting