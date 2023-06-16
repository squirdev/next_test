import React from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import Navbar from "@/components/layouts/Navbar";
import TextField from "@/components/TextField/TextField";
import styles from "./inquiry.module.css";

const Inquiry = (props: any) => {

  const [textValue, setTextValue] = useState("");
  const handleChange = (e: any): void => {
    setTextValue(e.target.value)
  }
  const router = useRouter();

  function handleBackClick() {
    router.back();
  }
  return (
    <div className={styles.inquiry}>
      <Navbar />
      <div className={styles.form}>
        <div className={styles.controlBtn}>
          <button className={styles.fbtn}>ご意見</button>
          <button className={styles.sbtn}>お問い合わせ</button>
        </div>
        {/* <input type="text" className={styles.month} placeholder="ご意見" />
        <input type="text" className={styles.year} placeholder="お問い合わせ" /> */}
        <input type="text" placeholder="お名前" />
        <input type="text" placeholder="メールアドレス" />
        <TextField
          multiline
          value={textValue}
          characterCount
          maxLength={300}
          id="modal-text-field"
          onChange={handleChange}
        />

      </div>
      <div className={styles.btn}>
        <button className={styles.setPin}>送信</button>
        <button className={styles.next} onClick={handleBackClick}>閉じる</button>
      </div>

    </div>
  )
}

export default Inquiry;
