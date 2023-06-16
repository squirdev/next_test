import * as React from 'react';
import { useState } from 'react';
import styles from "./nice.module.css";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';



const PinSetting = (props: any) => {

  return (
    <>
      {
        <div className={styles.nice}>
          <div>
            <div className={styles.user}>
              <img src="/user.svg" alt="usersvg"></img>
              <FontAwesomeIcon className={styles.icon} icon={faCamera} />
            </div>

            <div className={styles.userName}>
              <label>ニックネーム</label>
              <input type="text" placeholder="ダイキ" />
            </div>

            <div className={styles.dashline}>
            </div>

            <div className={styles.niceHistory}>
              <p>ナイス！　履歴</p>

              <div>
                <span className={styles.date}>2023/10/11
                </span>
                <span className={styles.time}>12:35
                </span>
                <span className={styles.name}>ヤマダ
                </span>
                <span className={styles.location}>鹿児島県鹿児島市真砂町54-3
                </span>
              </div>
            </div>
            <div className={styles.btnContain}>

              <div className={styles.btn}>
                <p>ナイス！　通知</p>
                <label className={styles.toggle}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
export default PinSetting