import styled from "styled-components";

export const Container = styled.div`

height: 100vh;
width: 100%;
padding-top: 40px;

@media screen and ( min-width: 850px ) {
    height: 80vh;
}

@media screen and ( min-width: 1000px ) {
     padding-top: 60px;
}

`;

export const DivHeader = styled.div`

height: 22vh;
display: flex;
flex-direction: column;
align-items: center;

h2 {
    color: #483D8B;
    font-size: 1.9rem;
}

p {
    width: 85%;
    padding-top: 10px;
    color: #000080;
    text-align: center;
    font-size: 1.2rem;
}

@media screen and ( min-width: 650px ) {
    height: 10vh;
}

@media screen and ( min-width: 850px ) {
    height: 0.5vh;
}
`;

export const Section = styled.section`

height: 75vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding-top: 10px;

@media screen and ( min-width: 850px ) {
    height: 50vh;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    margin: auto;
    gap: 17px;
    padding: 0px;
}//! @media

@media screen and ( min-width: 649px ) {
    height: 80vh;
    margin-top: 30px;
}//! @media

`;

export const DivIformation = styled.div`

height: 23vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

@media screen and (max-width: 430px) {
gap: 15px;
}

@media screen and ( min-width: 850px ) {
    height: 45vh;
    flex-direction: column;
}
`;

export const DivImg = styled.div`

height: 23vh;
width: 50%;

img {
    height: 22vh;
    width: 100%;
    border-radius: 10px;
}

@media screen and ( min-width: 850px ) {
    height: 22.5vh;
    width: 100%;
    padding-top: 10px;
}
`;

export const DivPernsona = styled.div`

height: 23vh;
width: 40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;

p {
    text-align: center;
    
    font-weight: bold;
    color: #483D8B;
}

@media screen and ( min-width: 850px ) {
    width: 70%;
}

`;

export const DivOrganization = styled.div`

display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 8vh;
gap: 5px;

div {
    width: 27px;
    height: 27px;
    border: 1px solid;
    border-radius: 50%;
    background-color: yellow;
}

span {
    color: #000080;;
}
`;