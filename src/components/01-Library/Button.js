import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    height: 2.5em;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.05rem;
    border: 1px solid #dddddd;
    border-radius: 0.25rem;
    background-color: #eee;
    color: #191919;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.06);
    &:hover {
        background-color: #dadada;
        border-color: #d8d8d8;
    }
`

const Button = ({onClick, children}) => {
    return <StyledDiv onClick={onClick}>{children}</StyledDiv>
}

export default Button