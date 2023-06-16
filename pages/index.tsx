import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router'
const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/admin');
  }, [])
  return (
    <></>
  )
}

export default Home;