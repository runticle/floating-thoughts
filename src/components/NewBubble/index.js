import { useState, useRef } from "react"
import styled from "styled-components"

const NewBubbleStyle = styled.div`
    --font-color: #87CDF6;
  /* position: absolute; */
  /* bottom: 0;
  height: 15vh;
  left: 0;
  right: 0; */
/* 
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center; */

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
        width: 50px;
        height: 50px;
        background: white;
        border-radius: 50%;
        padding: 0;
        margin: 0;
        border: none;
        box-shadow: rgba(145,106,112,0.2) 0 6px 24px;
        position: relative;
        color: var(--font-color);

        display: flex;
        align-items: center;
        /* justify-content: center; */

        span {
            color: var(--font-color);
            overflow: hidden;
            text-align: center;
            white-space: nowrap;
            font-size: 50px;
            
            border-radius: 50%;
            width: 50px;
            padding-bottom: 7px;
            padding-left: 14px;

            
            transition-property: width, padding, color, transform;
            transition-duration : 0.25s, 0.25s, 1s, 0.5s;
            transition-timing-function: ease, ease, ease, ease;
            transition-delay: 1s, 1s, 0.5s, 0s;
        }

        > input{ 
            border: none;
            padding: 0;
            margin: 0;
            width: 0;
            text-align: left;
            outline: none !important;
            padding-left: 10px;

            background: transparent;
            transition: width 0.75s ease-out 0.2s;
            height: 50px;

            &::placeholder {
                color: var(--font-color);
            }
        }

        transition-property: width, color, border-radius;
        transition-duration : 0.4s, 1s, 0.25s;
        transition-timing-function: ease-in, ease, ease;
        transition-delay: 0.4s, 0.25s, 0.75s;

        &:hover, &:focus, &:active, &:focus-within {
            width: 350px;
            border-radius: 5px;
            background: white;

            transition-delay: 0.25s, 0.25s, 0s;
            
            >input {
                width: 200px;

                &::placeholder {
                    color: var(--font-color);
                }
            }

            span {
                color: transparent;
                width: 0;
                padding: 0;

                transform: rotate(45deg) scale(3);

                transition-duration: 0.35s, 0.35s, 0.15s;
                transition-delay: 0s , 0s , 0s;
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
                    <span>+</span>
                    <input ref={inputRef} value={thought} onChange={handleChange} placeholder="What are you thinking?" />
                </div>

                <p className={thought.length ? 'show' : ''}>
                    Press Enter
                </p>

            </form>


        </NewBubbleStyle>
    )

}
