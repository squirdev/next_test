import Image from 'next/image'
import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google'
import Navbar from '@/components/layouts/Navbar';
import secondWelcomeSvg from '../../public/secwelc.svg';
import styles from './welcome.module.css';

const inter = Inter({ subsets: ['latin'] })

type Props = {
  title: string;
};
const First: NextPage<Props> = ({ title }) => {

  const router = useRouter();
  const goHome = () => {
    router.push('/home');
  }

  return (
    <div>
      <Navbar />
      <main className={`relative flex flex-col items-center justify-between ${inter.className}`}>
        <div className={styles.img}>
          <Image src={secondWelcomeSvg} alt="secondWelcomeSvg" />
        </div>
        <div className={styles.content}>
          <p >事故が起こる前に、事故多発箇所をシェアして事故防止に努めましょう</p>
          <button className={styles.btn} onClick={goHome}>始める</button>
        </div>
      </main>
    </div>
  )
}

export default First;