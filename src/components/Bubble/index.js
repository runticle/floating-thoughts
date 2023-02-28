import useWindowDimensions from "@/utils/useWindowDimensions";
import { useCallback, useEffect, useState, useMemo } from "react";

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
    cursor: crosshair;
    animation: 4.3s linear normal grow;

    .span {
        pointer-events: none;
    }

    @keyframes grow {
        0% {transform: scale(0.00001);}
        100% {transform: scale(1);}
    }

    &.popped {
        animation: 1s linear normal shrink;
    }

    @keyframes shrink {
        0% {transform: translate3d(0,0,0)}
        60% {transform: perspective(550px) translate3d(2000px, 1500px, -12000px);}
        100% {transform: perspective(550px) translate3d(4500px, 2000px, -50000px);}
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
    }
`

export default function Bubble({ text, id, onClickHandler }) {
    const { height: windowHeight, width: windowWidth } = useWindowDimensions();
    const [position, newPosition] = useState({ left: getRandomNumberUpTo(windowWidth), bottom: getRandomNumberUpTo(windowHeight) })
    const [popped, pop] = useState(false)

    const popAudio = useMemo(() => new Audio('/pop.mp3'), []);
    popAudio.playbackRate = 2.2

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
        popAudio.play()
        pop(true)
        setTimeout(() => onClickHandler(id), 900)
    }, [pop, id, onClickHandler, popAudio])

    return (
        <BubbleStyle className={popped ? 'popped' : ''} onClick={handleClick} style={{ left: left + 'px', bottom: bottom + 'px' }}>
            <span>
                {text}
            </span>
        </BubbleStyle>
    )

}

const getRandomNumberUpTo = (n) => Math.floor(Math.random() * n)


