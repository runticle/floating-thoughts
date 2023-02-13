import { useState } from "react"
import styled from "styled-components"

const NewBubbleStyle = styled.div`
  
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
            <p>
                Add thought
            </p>
            <input value={thought} onChange={handleChange} placeholder="Enter" />.
            <button type="submit" onClick={handleSubmit}>
                Release
            </button>
        </NewBubbleStyle>
    )

}
