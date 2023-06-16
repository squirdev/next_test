import { useState } from "react";
import { NextPage } from 'next';
import { Inter } from 'next/font/google';
import styles from './registeration.module.css';

const Registeration = (props: any) => {

  const [phonenumber, setPhonenumber] = useState("");
  const [mailaddress, setMailaddress] = useState("");
  const [credit, setCredit] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const changePhonenumber = (e: any) => {
    setPhonenumber(e.target.value)
  }

  const changeMailaddress = (e: any) => {
    setMailaddress(e.target.value)
  }

  const changeCredit = (e: any) => {
    setCredit(e.target.value)
  }

  const changeYear = (e: any) => {
    setYear(e.target.value)
  }

  const changeMonth = (e: any) => {
    setMonth(e.target.value)
  }

  const handleForm = async (event: any) => {
    event.preventDefault();
    const token = localStorage.getItem("Idtoken");
    const apiUrl = "http://localhost:5000/registration";
    const requestOptions: object = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({ phonenumber, mailaddress, credit, year, month }),
    };

    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
  }

  return (
    <div className={styles.regi}>
      <div className={styles.form}>
        <label>電話番号（ログイン番号）</label>
        <input type="text" placeholder="08017068565" onChange={changePhonenumber} value={phonenumber} />

        <label>メールアドレス</label>
        <input type="text" placeholder="kawashitabros@@@.com" onChange={changeMailaddress} value={mailaddress} />

        <label>クレジット情報</label>
        <input type="text" placeholder="5210120088967675" onChange={changeCredit} value={credit} />

        <label>月／年</label>
        <input className={styles.month} type="text" placeholder="05" onChange={changeMonth} value={month} />
        <input className={styles.year} type="text" placeholder="25" onChange={changeYear} value={year} />

        <label>次回の更新日  ( ¥50/月 )</label>
        <input type="text" className={styles.date} placeholder="2023/10/10 23:10" />
      </div>
      <div className={styles.btn}>
        <button className={styles.changebtn}>登録情報を変更する</button>
        <button className={styles.unsub} onClick={handleForm}>policemapを退会する</button>
      </div>
    </div>
  )
}

export default Registeration;