import { useState } from 'react';
import { NextPage } from 'next';
// import ReactPlayer from 'react-player'
import { Inter } from 'next/font/google';
import Navbar from '@/components/layouts/Navbar';
import RModal from '../auth/Register';
import LModal from '../auth/Login';
import LPModal from '../auth/LoginwithPhone';
import SPModal from '../auth/SingupwithPhone';
import Map from '../../components/Map';
import styles from "../../styles/home.module.css";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
// import video from '../../video/LP用動画 511.MOV';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const inter = Inter({ subsets: ['latin'] })

type Props = {
  title: string;
};

const Admin: NextPage<Props> = ({ title }) => {

  const router = useRouter();

  const goDescription = () => {
    router.push('/description');
  }

  const config = {
    file: {
      attributes: {
        style: {
          objectFit: "cover",
          width: "100%",
          height: "100%"
        },
      },
    },
  };

  const [isLOpen, setIsLOpen] = useState(false);
  const [isROpen, setIsROpen] = useState(false);
  const [isLPOpen, setIsLPOpen] = useState(false);
  const [isSPOpen, setIsSPOpen] = useState(false);

  const handleOpenLModal = () => setIsLOpen(true);
  const handleOpenRModal = () => setIsROpen(true);
  const handleOpenLPModal = () => setIsLPOpen(true);
  const handleOpenSPModal = () => setIsSPOpen(true);
  const handleCloseLModal = () => setIsLOpen(false);
  const handleCloseRModal = () => setIsROpen(false);
  const handleCloseLPModal = () => setIsLPOpen(false);
  const handleCloseSPModal = () => setIsSPOpen(false);

  return (

    <div>
      <Navbar />
      <main className={`relative flex flex-col items-center justify-between ${inter.className}`}>
        {/* <Map /> */}
        <div>
          <div className={styles.video}>
            <ReactPlayer width="100%" height="100%" url='/video/LP用動画 511.MOV' config={config} playing={true} loop={true} muted />
          </div>
          <div className={styles.btn}>
            <div>
              <button className={styles.signUpBtn} onClick={handleOpenSPModal}>無料で始める</button>
              <SPModal isOpen={isSPOpen} onClose={handleCloseSPModal} />

              <button className={styles.loginBtn} onClick={handleOpenLPModal}>ログイン</button>
              <LPModal isOpen={isLPOpen} onClose={handleCloseLPModal} />
              <h1 className={styles.footerTitle}>ホーム画面に追加</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Admin;