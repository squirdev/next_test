import Image from 'next/image'
import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google'
import Navbar from '@/components/layouts/Navbar';
import firstWelcomeSvg from '../../public/firstwelc.svg'
import styles from './welcome.module.css';

const inter = Inter({ subsets: ['latin'] })

type Props = {
  title: string;
};
const First: NextPage<Props> = ({ title }) => {
  
  const router = useRouter();
  const goSecond = () => {
    router.push('/welcome/Second');
  }

  return (
    <div>
      <Navbar />
      <main className={`relative flex flex-col items-center justify-between ${inter.className}`}>
        <div className={styles.img}>
          <Image src={firstWelcomeSvg} alt="firstWelcomeSvg" />
        </div>
        <div className={styles.content}>
          <p>日々、白バイ／パトカーが事故多発箇所を見張ってくれています</p>
          <button className={styles.btn} onClick={goSecond}>次へ</button>
        </div>
      </main>
    </div>
  )
}

export default First;