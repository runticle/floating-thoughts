import useWindowDimensions from "@/utils/useWindowDimensions";
import { useCallback, useEffect, useState } from "react";

export default function Bubble({ idea, onClickHandler }) {
    const [position, newPosition] = useState({ left: 0, bottom: 0 })
    const { height: windowHeight, width: windowWidth } = useWindowDimensions();

    const { left, bottom } = position;

    const handlePosition = useCallback(() => {
        // simple function for now. Obviously rubbish and bubbles tend towards the center
        const newLeft = 0 + getRandomNumberUpTo(windowWidth)
        const newBottom = 0 + getRandomNumberUpTo(windowHeight)

        newPosition({ left: newLeft, bottom: newBottom })
    }, [windowHeight, windowWidth])

    useEffect(() => {
        setTimeout(handlePosition, 5000)
    })


    return (
        <div className="bubble" style={{ ...defaultStyle, left: left + 'px', bottom: bottom + 'px' }}>
            {idea}
        </div>
    )

}

const getRandomNumberUpTo = (n) => Math.floor(Math.random() * n)

const defaultStyle = {
    padding: '20px',
    backgroundColor: 'blue',
    opacity: 0.5,
    position: 'absolute',
    transition: 'linear 10s',
    borderRadius: '50%',
    color: 'white',
    minHeight: '100px',
    minWidth: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

