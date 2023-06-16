'use client'
import React, { useState, FC } from "react";
import ReactModal from "react-modal";
import { X } from 'react-feather';
import styles from "./auth.module.css"
import { useRouter } from 'next/router';
import signUp from "@/firebase/auth/signup";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const RModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passError, setPassError] = useState(false);
  const [passErrorStr, setPassErrorStr] = useState("Confirm password");
  const [emailError, setEmailError] = useState(false);

  const changeEmail = (e: any) => {
    setEmail(e.target.value)
  }
  const changePassword = (e: any) => {
    setPassword(e.target.value)
  }
  const changeRePassword = (e: any) => {
    setRePassword(e.target.value)
  }
  const goHome = () => {
    if (password == rePassword) {
      router.push('/home');
    } else {
      setPassError(true);
    }
  }
  const handleForm = async (event :any) => {
    event.preventDefault()
    if (password.length < 6) {
      setPassErrorStr("Password should be at least 6 characters.")
      setPassError(true)
      return;
    }
    if (password != rePassword) {
      setPassErrorStr("Confirm password.")
      setPassError(true);
      return;
    }

    const { result, error } = await signUp(email, password);

    if (error) {
      setEmailError(true);
      return console.log(error)
    }

    // else successful
    console.log(result)
    return router.push("/home")
}

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Register Modal"
      className={styles.Main}
    >
      <div className={styles.Head}>
        <h1 className={styles.Name}>初めての方</h1>
        <X className={styles.CrossButton} onClick={onClose}></X>
      </div>
      <form className={styles.Content} onSubmit={handleForm}>
        <input placeholder="test@gmail.com" type="text" value={email} onChange={changeEmail} />
        { (emailError) && <p className={styles.Error}>Already existing email.</p> }
        <input placeholder="password" type="password" value={password} onChange={changePassword} />
        <input placeholder="re-password" type="password" value={rePassword} onChange={changeRePassword} />
        { (passError) && <p className={styles.Error}>{passErrorStr}</p> }
        <button type="submit">次へ</button>
      </form>

    </ReactModal>
  )
}

export default RModal;