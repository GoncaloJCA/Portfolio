import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Main from '../components/main'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'


export default function Home() {
  return (
    <div>
        <div className={styles.container}>
          <Head>
            <title>Gonçalo | Software Engineer</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </div>
        <div>
          <Navbar></Navbar>
          <Main></Main>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
        </div>
    </div>
   
  )
}
