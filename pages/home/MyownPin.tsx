import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import niceiconSvg from '../../public/niceicon.svg';
import Image from "next/image";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import styles from "./main.module.css";
import { useRouter } from "next/router";
import DeleteModal from './DeleteModal';



const MyownPin = (props: any) => {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    setOpen(props.open)
  }, [props])

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const router = useRouter();

  const goSettings = () => {
    router.push('../settings');
  }

  return (
    <>
      {
        // open ? (
        <div className={styles.pinSetting}>
          <div>
            <h1>ピンを設定</h1>
          </div>
          <div>
            <div className={styles.evenRow}>
              <FontAwesomeIcon className={styles.settingIcon} icon={faMapMarkerAlt} />
              <span>鹿児島県鹿児島市真砂町54-3</span>
              {/* <span className={styles.fourthedit}>編集</span> */}
            </div>
            <div className={styles.evenRow}>
              <FontAwesomeIcon className={styles.settingIcon} icon={faClock} />
              <span>2023/05/15  10:15</span>
            </div>
            <div className={styles.row}>
              <FontAwesomeIcon className={styles.settingIcon} icon={faCommentDots} />
              <span>詳細（任意）</span>
              <span className={styles.fourthedit}>入力</span>
            </div>
          </div>

          <div className={styles.favorite}>
            <button className={styles.favorite_2}>
              {/* <FontAwesomeIcon className={styles.favoriteicon} icon={faThumbsUp} /> */}
              <div className={styles.niceicon}>
                <Image src={niceiconSvg} alt="nice icon" width={30} height={30} />
              </div>
              <span>ナイス！</span>
            </button>
            <span>タップしてナイス！を送る</span>
          </div>

          <div className={styles.btn}>
            <button className={styles.setPin} onClick={goSettings}>ピンを確認する</button>
            <button className={styles.next} >変更する</button>

          </div>
          <div onClick={handleOpenModal}>
            <h1 className={styles.footerTitle}>このピンを削除する</h1>
          </div>
          <DeleteModal isOpen={isOpenModal} onClose={handleCloseModal} />
        </div>
        // ) : ''
      }
    </>
  )
}
export default MyownPin