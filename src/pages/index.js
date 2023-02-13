import Bubble from '@/components/Bubble'
import Head from 'next/head'
import styled from 'styled-components'

const MainStyles = styled.div`
  @font-face {
      font-family: 'calm';
      src: url('/quesha.ttf') format("truetype");
      font-weight: normal;
      font-style: normal;
  }

  font-family: 'calm', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.3rem;

  background: linear-gradient(to top, #8CE68C, #ABF1BC 10%, #CFFFF6 40%, #AEE7F8 80%, #87CDF6 100%);
  width: 100vw;
  height: 100vh;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Floating Thoughts</title>
        <meta name="description" content="Visualise your mind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainStyles>
        <Bubble idea={"Hello World"} />
        <Bubble idea={"Clean the dishes"} />
        <Bubble idea={"Solve world peace"} />
        <Bubble idea={"do some coding for my dads birthday game"} />
        <Bubble idea={"sort out mothers day"} />
        <Bubble idea={"what happens if I write a really long thing cos my thoughts are so complex and I just don't know how to condense them?"} />
      </MainStyles>
    </>
  )
}
