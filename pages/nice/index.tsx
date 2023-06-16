import { useState } from "react";
import { NextPage } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layouts/Navbar';
import Map from '../../components/Map';
import styles from "../settings/settings.module.css";
import Nice from "./Nice"
import Toolbar from "@/components/Toolbar/Toolbar";


const inter = Inter({ subsets: ['latin'] })

type Props = {
  title: string;
};

const Home: NextPage<Props> = ({ title }) => {

  return (
    <div>
      <Navbar />
      <main className={`relative flex flex-col items-center justify-between ${inter.className}`}>

        <Map />
        <Nice />

        <Toolbar />
      </main>
    </div>
  )
}

export default Home;