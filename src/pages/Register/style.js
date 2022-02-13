import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

@media screen and  ( min-width: 700px ) {
    display: flex;
    flex-direction: row-reverse;
}

@media ( min-width: 1000px ) {
    justify-content: space-between;
}
`;

export const DivImg = styled.div`

height: 40vh;
display: flex;
justify-content: flex-end;

img {
    height: 40vh;
}

@media screen and  ( min-width: 700px ) {
    height: 100vh;
    width: 50%;

    img {
        height: 70vh;
    }
}

@media ( min-width: 1000px ) {
    
    img {
        height: 100vh;
    }
}

`;

export const DivForm = styled.div`
height: 100vh;

@media ( min-width: 1000px ) {
    margin: 0px auto;
}
`;

export const ButtonGoBack = styled.button`
border: none;
background: none;
font-size: 22px;
position: absolute;
right: 95%;
top: 30px;

@media screen and  ( max-width: 550px ) {
    right: 85%;
}
`;