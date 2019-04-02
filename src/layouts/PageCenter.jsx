import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
background-color: #282c34;
min-height: 100vh;
display: flex;
align-items:center;
justify-content:center;
text-align:center; 
font-size: calc(10px + 2vmin);
color: white;
`
const PageCenter = (props) => {
    return (
        <PageContainer>
            {props.children}
        </PageContainer>
    );
}

export default PageCenter;