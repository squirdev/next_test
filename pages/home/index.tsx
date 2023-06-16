import React, { useState } from "react";
import { NextPage } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layouts/Navbar';
import Map from '../../components/Map';
import PinSetting from "./PinSetting";
import styles from "./main.module.css";
import { useRouter } from "next/router";
import Toolbar from "@/components/Toolbar/Toolbar";
import MapControlBtn from "@/components/MapControlBtn";

const inter = Inter({ subsets: ['latin'] })

type Props = {
  title: string;
};

const Home: NextPage<Props> = ({ title }) => {

  const router = useRouter();

  const goFirst = () => {
    console.log(router.pathname, '====>')
    router.push('../home/First');
  }
  const [openDraw, setOpenDraw] = useState<boolean>(true);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  function longTouchStart(): void {
    const id: number = window.setTimeout(() => {
      setIsClicked(true);
      setOpenDraw(true)
    }, 1500); // set the time in milliseconds for how long to wait before triggering the long press

    setTimeoutId(id);
  }

  return (
    <div>
      <Navbar />
      <main className={`relative flex flex-col items-center justify-between ${inter.className}`}>
        <div
          onMouseDown={goFirst}
          onMouseUp={goFirst}
          onTouchStart={goFirst}
          className={styles.map}
        >
          <Map />
          <MapControlBtn />
          {/* <PinSetting open={openDraw} /> */}
          <PinSetting />
        </div>
        <Toolbar />
      </main>
    </div>
  )
}

export default Home;