import React, { useState, FC } from "react";
import ReactModal from "react-modal";
import { Inter } from 'next/font/google'
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { X } from 'react-feather';
import styles from "./auth.module.css"
import firebase_app from "@/firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);
const inter = Inter({ subsets: ['latin'] })

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const LPModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const goHome = () => {
    router.push('/home');
  }

  const [phoneNumber, setPhonenumber] = useState("");
  const [verifycode, setVerifycode] = useState("");
  const [phoneInput, setPhoneInput] = useState(true);
  const [confirmInput, setConfirmInput] = useState(false);
  const [codeError, setCodeError] = useState(false);

  const changePhonenumber = (e: any) => {
    setPhonenumber(e.target.value)
  }
  const changeVerifycode = (e: any) => {
    setVerifycode(e.target.value)
  }

  const onSignInSubmit = async (event: any) => {
    event.preventDefault();

    const phone = '+' + phoneNumber;
    const appVerifier = new RecaptchaVerifier(
      "phone-sign-in-button",
      {
        size: "invisible",
      },
      auth
    );
    await signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        (window as any).confirmationResult = confirmationResult;
        setPhoneInput(false);
        setConfirmInput(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onSubmitOtp = (e:any) => {
    e.preventDefault();
    // confirmationResult
    //   .confirm(verifycode)
    //   .then((result: any) => {
    //     // const user = result.user;
    //     localStorage.setItem("Idtoken", `Bearer ${result._tokenResponse.idToken}`);
    //     goHome();
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //     setCodeError(true);
    //   });
  };

  return (
    <>
      <main className={`relative flex flex-col items-center justify-between ${inter.className}`}>
        <ReactModal
          isOpen={isOpen}
          onRequestClose={onClose}
          contentLabel="Login Modal"
          className={styles.Main}
        >
          <div className={styles.Head}>
            <h1 className={styles.Name}>ログイン</h1>
            <X className={styles.CrossButton} onClick={onClose}></X>
          </div>
          <div id="recaptcha-container"></div>
          {(phoneInput) &&
            <form onSubmit={onSignInSubmit} className={styles.Content}>
              <input placeholder="16505551234" type="number" value={phoneNumber} onChange={changePhonenumber} />
              <button type="submit" id="phone-sign-in-button">次へ</button>
            </form>
          }
          {(confirmInput) &&
            <form onSubmit={onSubmitOtp} className={styles.Content}>
              <input placeholder="Code" type="number" value={verifycode} onChange={changeVerifycode} />
              {(codeError) && <p className={styles.Error}>正しくない</p>}
              <button type="submit">次へ</button>
            </form>
          }
        </ReactModal>
      </main>
    </>
  )
}

export default LPModal;