import { useState } from "react"
import styled from "styled-components"

const NewBubbleStyle = styled.div`
  position: absolute;
  bottom: 0;
  height: 15vh;
  left: 0;
  right: 0;

  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  > * {
    font-family: calm;
    font-size: 20px;
  }
  

  line-height: 1rem;

  input {
    width: 100vw;
    max-width: 350px;
    background: white;
    padding-left: 10px;
    border-radius: 5px;
    border: 1px solid #87CDF6;
    height: 30px;
    color: #87CDF6;

    &::placeholder {
        color: #87CDF6;
    }

    &:active, &:focus {

    }
  }
    button {
        width: 100vw;
        max-width: 150px;

        background: #87CDF6;
        border-radius: 5px;
        border: 1px solid #87CDF6;
        height: 30px;

        color: white;
    }

  border-top: 1px solid #8CE68C;
  background: radial-gradient(ellipse at 50% 0%, #8CE68C, #ABF1BC 20%, #CFFFF6 60%, #AEE7F8 70%, #87CDF6 100%);

`

export default function NewBubble({ onSubmit }) {
    const [thought, setThought] = useState('')

    const handleChange = (e) => {
        setThought(e?.target?.value)
    }

    const handleSubmit = (e) => {
        setThought('')
        onSubmit(thought)
    }

    return (
        <NewBubbleStyle>
            <input value={thought} onChange={handleChange} placeholder="What are you thinking?" />
            <button type="submit" onClick={handleSubmit}>
                Release
            </button>
        </NewBubbleStyle>
    )

}
