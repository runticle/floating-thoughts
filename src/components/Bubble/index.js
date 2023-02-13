import useWindowDimensions from "@/utils/useWindowDimensions";
import { useCallback, useEffect, useState } from "react";

import styled from "styled-components"

const BubbleStyle = styled.div`
    padding: 20px;
    opacity: 0.7;
    position: absolute;
    transition: linear 15s;
    border-radius: 50%;
    color: white;
    min-height: 100px;
    min-width: 100px;
    max-width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: radial-gradient(circle at bottom, #81e8f6, #76deef 10%, #055194 80%, #062745 100%);
    cursor: pointer;
    animation: 4.3s linear normal grow;

    @keyframes grow {
        0% {transform: scale(0.00001);}
        100% {transform: scale(1);}
    }

    &.popped {
        animation: 1s linear normal shrink;
    }

    @keyframes shrink {
        0% {transform: scale(1);}
        60% {transform: scale(0.3);}
        95% {transform: scale(0.000001);}
        100% {transform: scale(0.01);}
    }

    &:before {
        content: "";
        position: absolute;
        top: 1%;
        left: 6%;

        width: 95%;
        height: 95%;
        border-radius: 100%;
        background: radial-gradient(circle at top, white, rgba(255, 255, 255, 0.1) 58%);
        filter: blur(5px);
        z-index: 2; 
        /* transform: rotate(45deg) */
    }
`

export default function Bubble({ text, id, onClickHandler }) {
    const { height: windowHeight, width: windowWidth } = useWindowDimensions();
    const [position, newPosition] = useState({ left: getRandomNumberUpTo(windowWidth), bottom: getRandomNumberUpTo(windowHeight) })
    const [popped, pop] = useState(false)

    const { left, bottom } = position;

    const handlePosition = useCallback(() => {
        // simple function for now. Obviously rubbish and bubbles tend towards the center
        // desired rules
        // avoid each other ?
        // use all space
        // dont go off screen
        const newLeft = 0 + getRandomNumberUpTo(windowWidth)
        const newBottom = 0 + getRandomNumberUpTo(windowHeight)

        newPosition({ left: newLeft, bottom: newBottom })
    }, [windowHeight, windowWidth])

    useEffect(() => {
        const interval = setInterval(() => handlePosition(), 4000)

        return () => clearInterval(interval)
    })

    const handleClick = useCallback(() => {
        pop(true)
        setTimeout(() => onClickHandler(id), 900)
    }, [pop])

    return (
        <BubbleStyle className={popped ? 'popped' : ''} onClick={handleClick} style={{ left: left + 'px', bottom: bottom + 'px' }}>
            {text}
        </BubbleStyle>
    )

}

const getRandomNumberUpTo = (n) => Math.floor(Math.random() * n)


