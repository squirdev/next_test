import * as React from 'react';
import Image from 'next/image'
import Currentpos from '../public/currentpos.svg';
import TodayPins from '../public/todaypins.svg';
import styles from "../pages/home/main.module.css";




function MapControlBtn() {
  return (
    <div className={styles.controlBtn}>
      <div>
        <button className={styles.currentpos}>
          <Image src={Currentpos} alt="currentpospng" />
          <span>現在地</span>
        </button>
      </div>
      <div className={styles.todayBtn}>
        <button className={styles.todaypins}>
          <Image src={TodayPins} alt="todaypinspng" />
        </button>
        <p> 今日のピン</p>
      </div>
    </div >
  )
}

export default MapControlBtn;