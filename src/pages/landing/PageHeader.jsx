import React from 'react';
import styled from "styled-components";


const Brand = styled.header`
text-align:center;
  color:#444;
  margin-bottom: 1rem;
    h1{
        font-size: calc(1.5rem + 1vmin);
        margin-top:1rem;
    }
    p{
        font-size: calc(0.8rem + 1vmin);
    }
 
`

const PageHeader = () => {
    return (
        <Brand>
            <h1>DMIT WEB DEVELOPMENT</h1>
            <p>web industry company directory</p>
        </Brand>
    );
}

export default PageHeader;

