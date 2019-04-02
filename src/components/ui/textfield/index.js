import React from "react"
import styled from "styled-components";


const Input = styled.input`
    padding: 0.5rem 1rem;
    background: none;
    border: none;
    font-size: 1.175rem;
    border: 1px solid  ${props => props.theme.border};
    border-radius: 5px;
    color: ${props => props.theme.text};
    font-weight:bold;
    width: ${props => props.theme.width};
    display: ${props => props.theme.display};
    margin-bottom: ${props => props.theme.marginBottom};
     background:rgba(255,255,255,0.25);
    :focus{
        background:rgba(255,255,255,0.125);
    }
`

Input.defaultProps = {
    theme: {
        width: "100%",
        display: "block",
        text: "#fff",
        border:"rgba(255,255,255,0.125)",
        marginBottom: "1rem"
    }
}
const Label = styled.label`
    font-size: 14px;
    color: ${props => props.theme.textColor};
    margin-bottom: ${props => props.theme.marginBottom};
    margin-left: ${props => props.theme.marginLeft};  
`
Label.defaultProps = {
    theme: {
        width: "100%",
        display: "block",
        textColor: "#fff",
        marginBottom: "0.25rem",
        marginLeft: "0.25rem"
    }
}

const defaultLabel = "Label Text"

const TextField = (props) =>{
    return (
        <div>
         <Label>{props.label}</Label>
         <Input/>
        </div>
    )
}

export default TextField