import React from 'react'
import styled from 'styled-components'

const StyledBeforeIcon = styled.div`
    margin-right: 0.2rem;
    width: 100%;
    &:before {
        content: ${props => `"${props.iconContent || ''}"`};
        font-family: "Font Awesome 5 Pro";
        font-style: normal;
        font-weight: normal;
        text-decoration: inherit;
        position: absolute;
        color: #6f6f6f;
        opacity: 0.6;
        margin-top: 0.6rem;
        margin-left: 0.75rem;
    }
`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
    padding: .375rem 2.0rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

const Input = ({isDisabled, setText, formikKey, onFocus, text, beforeIcon, style}) => {

    const handleChange = (event) => {
        if (formikKey) {
            // Formik
            setText(formikKey, event.target.value)
        } else {
            // Normal useState hook
            setText(event.target.value)
        }
    }

    const handleFocus = () => {
        if (onFocus) {
            onFocus()
        }
    }

    return <StyledBeforeIcon style={style} iconContent={beforeIcon}>
        <StyledInput
            type="number"
            onFocus={() => handleFocus()}
            onChange={handleChange}
            value={text}
            disabled={isDisabled}></StyledInput>
    </StyledBeforeIcon>
}

export default Input