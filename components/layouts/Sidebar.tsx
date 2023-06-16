import React, { useState } from "react";
import styles from "./layouts.module.css";
import { useRouter } from "next/router";


function Sidebar(props: any) {
  const [isOpen, setIsOpen] = useState(props.open);
  const router = useRouter();

  const goInquiry = () => {
    router.push('/inquiry');
  }
  return (
    <>
      {isOpen ?
        (
          <div className={styles.sidebarMenu}>
            <div>
              <ul>
                <h1>MENU</h1>
                <li>お知らせ</li>
                <li>利用規約</li>
                <li onClick={goInquiry}>お問合せ</li>
                <li>ログアウト</li>
              </ul>

            </div>
          </div>
        )
        :
        ""
      }
    </>

  )
}

export default Sidebar