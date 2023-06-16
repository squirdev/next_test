import React from "react";
import styles from "./Toolbar.module.css"
import { NextPage } from 'next';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import niceiconSvg from '../../public/niceicon.svg';
import Image from "next/image";

function Toolbar() {


  const router = useRouter();
  const currentRoute = router.pathname;

  const goHome = () => {
    router.push('/home');
  }
  const goSettings = () => {
    router.push('/settings');
  }
  const goRegisteration = () => {
    router.push('/registeration');
  }
  const goNice = () => {
    router.push('/nice')
  }


  console.log(currentRoute);
  return (
    <div className={styles.Toolbar}>
      <nav className={styles.nav}>
        <ul>
          <li className={`${currentRoute.includes('/home') ? styles.active : styles.nonActive}`} onClick={goHome}>
            <FontAwesomeIcon className={styles.icon} icon={faHouse} />
            <span>ホーム</span>
          </li>
          <li className={`${currentRoute === '/settings' ? styles.active : styles.nonActive}`} onClick={goSettings}>
            <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} />
            <span>設定</span>
          </li>
          <li className={`${currentRoute === '/registeration' ? styles.active : styles.nonActive}`} onClick={goRegisteration}>
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
            <span>登録情報</span>
          </li>
          <li className={`${currentRoute === '/nice' ? styles.active : styles.nonActive}`} onClick={goNice}>
            <div className={styles.niceicon}>
              <Image src={niceiconSvg} alt="nice icon" width={30} height={30} />
            </div>
            <span>ナイス</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Toolbar;