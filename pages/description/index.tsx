import Image from 'next/image'
import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google'
import Navbar from '@/components/layouts/Navbar';
import Map from '../../components/Map';
import styles from "../description/description.module.css"

const inter = Inter({ subsets: ['latin'] })

type Props = {
  title: string;
};

const Home: NextPage<Props> = ({ title }) => {

  const router = useRouter();
  const goWelcome = () => {
    router.push('/welcome/First');
  }

  function handleBackClick() {
    router.back();
  }

  return (
    <div>
      <Navbar />
      <main className={`relative flex flex-col items-center justify-between ${inter.className}`}>
        <Map />
        <div className={styles.con}>
          <div className={styles.content}>
            <h1>
              ６か月間無料で”policeマップ.com”をお楽しみいただけます
            </h1>
            <p>
              利用ユーザー同士で、警察官の注意喚起場所を位置共有できます。通知はプッシュ通知で届きます。６か月間は無料でその後は月額￥50です。いつでも簡単に解約できます。
            </p>
            <div className={styles.free}>
              <h3>
                今だけ６ヶ月間無料
              </h3>
              <div className={styles.price}>
                <p>¥</p>
                <p className={styles.num}>50</p>
                <p> / 月</p>
              </div>
            </div>
            <div className={styles.btn}>
              <div>
                <button className={styles.signUpBtn} onClick={goWelcome}>無料で始める</button>
                <button className={styles.loginBtn} onClick={handleBackClick}>考えとく！</button>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;
