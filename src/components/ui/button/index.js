import styled from "styled-components";

 
const Button = styled.button`
    padding: 0.5rem 1rem;
    background: transparent;
    border: none;
    font-size: 20px;
    font-weight:bold;
    box-shadow: 0 0 3px 0 #083a63;
    border-radius: 5px;
    color: #3a4751;
    /* width: ${props => props.theme.width};
 
    margin-bottom: ${props => props.theme.marginBottom} */
`
Button.defaultProps = {
    theme: {
        width: "100%",
        marginBottom: "1rem"
    }
} 

export default Button