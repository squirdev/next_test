import { NextPage } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layouts/Navbar';
import Registeration from './Registeration';
import styles from './registeration.module.css';
import Toolbar from "@/components/Toolbar/Toolbar";
import Map from '@/components/Map';

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
        <Registeration />
        <Toolbar />
      </main>
    </div>
  )
}

export default Home;