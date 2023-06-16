import React, { useState } from "react";
import styles from "./layouts.module.css"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from "./Sidebar";

function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={styles.NavbarContain}>
      <div className={styles.Navbar}>
        <div className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="LogoSvg"
            width={30}
            height={30}
          />
        </div>
        <p className={styles.domain}>policemap.jp</p>
        <div onClick={() => setToggle(true)} className={styles.menuBar}>
          <FontAwesomeIcon className={styles.icon} icon={faBars} />
        </div>

      </div>
      {toggle ? (
        <div>
          <Sidebar open={toggle} />
          <div onClick={() => setToggle(false)} className={styles.sidebarOverlay}>
          </div>
        </div>
      ) : ""}
    </div>

  )
}

export default Navbar;