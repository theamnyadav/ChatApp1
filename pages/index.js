import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login';
import styles from '../styles/Home.module.css'
import { useMoralis } from 'react-moralis'
import Messages from '../components/Messages';

export default function Home() {
const { isAuthenticated,logout} = useMoralis();

if(!isAuthenticated) return <Login/>
  return (
    <div className={styles.container}>
      <Head>
        <title>Ultimate Web3 challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Decenteralized <a onClick={logout}>Chat App!</a>
        </h1>

       </main>
       <Messages/>
    </div>
  )
}
