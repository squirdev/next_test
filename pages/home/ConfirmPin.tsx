import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import UserSvg from '../../public/user.svg';
import niceiconSvg from '../../public/niceicon.svg';
import styles from "./main.module.css";
import { useRouter } from "next/router";



const ConfirmPin = (props: any) => {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    setOpen(props.open)
  }, [props])

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const router = useRouter();

  const goFifth = () => {
    router.push('../home/Fifth');
  }

  return (
    <>
      {
        <div className={styles.pinSetting}>
          <div className={styles.user}>
            <Image src={UserSvg} alt="usersvg" />
            <span>ダイキ</span>
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
            <button className={styles.setPin} onClick={goFifth}>シェアする</button>
            <button className={styles.next} onClick={handleOpenModal}>戻る</button>

          </div>
        </div>
      }
    </>
  )
}
export default ConfirmPin;