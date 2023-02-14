import Bubble from '@/components/Bubble'
import NewBubble from '@/components/NewBubble'
import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'

const MainStyles = styled.div`
  @font-face {
      font-family: 'calm';
      src: url('/quesha.ttf') format("truetype");
      font-weight: normal;
      font-style: normal;
  }

  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  font-family: 'calm', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.3rem;

  background: #e3f4fe;
`

const defaultIdeas = [
  {
    id: 1,
    text: "Example! Pop me!"
  }
  // "Clean the dishes",
  // "Solve world peace",
  // "do some coding for my dads birthday game",
  // "sort out mothers day",
  // "what happens if I write a really long thing cos my thoughts are so complex and I just don't know how to condense them?",
]

function getNextID(array) {
  return !array.length ? 1 : array.sort((a, b) => b.id - a.id)[0]['id'] + 1
}

export default function Home() {
  const [ideas, manageIdeas] = useState(defaultIdeas)

  const handleNewIdea = (idea) => {
    manageIdeas(ideas => [...ideas, {
      text: idea,
      id: getNextID(ideas)
    }])
  }

  const handlePop = (id) => {
    manageIdeas(ideas => ideas.filter(idea => idea.id !== id))
  }

  return (
    <>
      <Head>
        <title>Floating Thoughts</title>
        <meta name="description" content="Visualise your mind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainStyles>
        {
          ideas.map(({ text, id }) => <Bubble text={text} key={id} id={id} onClickHandler={handlePop} />)
        }
      </MainStyles>
      <NewBubble onSubmit={handleNewIdea} />
    </>
  )
}
