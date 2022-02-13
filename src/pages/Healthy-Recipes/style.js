import styled from "styled-components";

export const Container = styled.div`

height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 55px;

@media  ( min-width: 1000px ) {
    padding: 1px;
}

`;

export const SubDiv = styled.div`

height: 80vh;
width: 100%;
display: flex;
flex-direction: column;

@media  ( min-width: 1000px ) {
    
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}
`;

export const DivImg = styled.div`
height: 60vh;
display: flex;
justify-content: center;
align-items: center;

img {
    height: 46.5vh;
    width: 100%;
}

@media  ( min-width: 1000px ) {
    height: 80vh;
    width: 65%;

    img {
        height: 90vh;
    }
}

`;

export const DivInfo = styled.div`

height: 40vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;

h2 {
    text-align: center;
    font-size: 35px;
    color: #483D8B; 
}
`;

export const DivInput = styled.div`

width: 100%;
height: 7vh;
display: flex;
align-items: center;
justify-content: center;

.input-style {
 width: 50%;
 border-radius: 5px;
 
 input {
     width: 100%;
     height: 6vh;
    }
}//!input-style

.lupa {
    border-radius: 4px;
    height: 5.9vh;
    width: 7.9%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-left: 10px;
    background-color: #90EE90;
    color: white;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #32CD32;
    }
}//! Lupa

`;