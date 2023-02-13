import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Bubble from '@/components/Bubble'

export default function Home() {
  return (
    <>
      <Head>
        <title>Floating Thoughts</title>
        <meta name="description" content="Visualise your mind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Bubble idea={"Hello World"} />
        <Bubble idea={"Clean the dishes"} />
        <Bubble idea={"Solve world peace"} />
        <Bubble idea={"do some coding for my dads birthday game"} />
        <Bubble idea={"sort out mothers day"} />
      </main>
    </>
  )
}
