import styled from 'styled-components'

const HeaderStyles = styled.div`    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100px;
    padding: 0 20px;
    
    color: #87CDF6;

    @media screen and (max-width: 768px){
        font-size: 80%;
    }
    
    >div, >h1 {
        text-align: center;
        justify-self: center;
    }

    .socials {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`

export default function Header() {
    return (
        <HeaderStyles>
            <div className="psuedo" />
            <h1>
                Floating Thoughts
            </h1>
            <div className="socials">
                <a href="https://www.linkedin.com/in/alfiefreeman/" target="_blank" rel="noreferrer">
                    <img alt="LinkedIn" src="/assets/In-2C-54px-TM.png" style={{ width: '34px', marginRight: '5px' }} />
                </a>
                <a href="https://www.github.com/runticle" target="_blank" rel="noreferrer">
                    <img alt="Github" src="/assets/GitHub-Mark-64px.png" style={{ width: '30px' }} />
                </a>
            </div>
        </HeaderStyles>
    )
}