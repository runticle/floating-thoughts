import { useState, useRef } from "react"
import styled from "styled-components"

const NewBubbleStyle = styled.div`
    --font-color: #87CDF6;
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
  justify-content: center;

  text-align: center;
  color: var(--font-color);

  > * {
    font-family: calm;
    font-size: 20px;
  }
  

  line-height: 1rem;

  p {
    color: transparent;
    transition: all 1s ease;
    
    &.show {
       color: #CFFFF6;
    }
  }

    .input-hover{
        opacity: 0.7;
        width: 70px;
        height: 50px;
        background: white;
        border-radius:  5px;
        padding: 0 20px;
        margin: 0;
        border: none;
        box-shadow: rgba(145,106,112,0.2) 0 6px 24px;
        position: relative;
        color: var(--font-color);

        display: flex;
        align-items: center;
        justify-content: center;

        span {
            color: var(--font-color);
            width: 70px;
            overflow: hidden;
            text-align: center;
            white-space: nowrap;
            
            transition-property: width, color;
            transition-duration : 1s, 2s;
            transition-timing-function: ease-in, ease-out;
            transition-delay: 1s, 2s;
        }

        > input{ 
            border: none;
            padding: 0;
            margin: 0;
            width: 0;
            text-align: center;
            outline: none !important;
            
            background: transparent;
            transition: width 1.2s ease-out 0.4s;
            height: 50px;

            &::placeholder {
                color: var(--font-color);
            }
        }

        transition-property: background, width, color, border-radius;
        transition-duration : 3s, 2s, 2s, 0.5s;
        transition-timing-function: ease-in, ease-in, ease, ease;
        transition-delay: 0.5s, 0s, 0.5s, 0.5s;

        &:hover, &:focus, &:active, &:focus-within {
            width: 350px;
            border-radius: 5px;
            background: white;
            padding-left: 10px;

            >input {
                width: 200px;

                &::placeholder {
                    color: var(--font-color);
                }
            }

            span {
                color: transparent;
                width: 0;
                transition: 4s, 0.5s;
            }

        }

    }

`

export default function NewBubble({ onSubmit }) {
    const [thought, setThought] = useState('')

    const handleChange = (e) => {
        setThought(e?.target?.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        inputRef.current.blur() // clears focus and resets the new bubbler
        setThought('')
        onSubmit(thought)
    }


    const inputRef = useRef()

    return (
        <NewBubbleStyle>
            <form onSubmit={handleSubmit}>

                <div className="input-hover">
                    <span>New Bubble</span>
                    <input ref={inputRef} value={thought} onChange={handleChange} placeholder="What are you thinking?" />
                </div>

                <p className={thought.length ? 'show' : ''}>
                    Press Enter
                </p>

            </form>


        </NewBubbleStyle>
    )

}
