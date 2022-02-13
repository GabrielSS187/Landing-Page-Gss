import styled from "styled-components";

export const Container = styled.div`

height: 100vh;
padding-top: 20px;

@media  ( min-width: 1000px ) {
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export const DivImg = styled.div`

height: 50vh;

img {
    height: 50vh;
    width: 100%;
}

@media  ( min-width: 1000px ) {
    height: 100vh;
    width: 60%;

    img {
        height: 100vh;
     }
}
`;

export const DivParagraph = styled.div`

height: 50vh;
padding-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;

h2 {
    text-align: center;
    color: #483D8B;
    font-size: 2rem;
    width: 85%;
}

p {
    width: 85%; 
    text-align: center;
    padding-top: 25px;
    font-size: 0.9rem;
    color: #000080;
    margin: auto;
}

button {
    border-radius: 4px;
    border: none;
    height: 5.9vh;
    width: 30%;
    font-size: 1.1rem;
    color: white;
    background-color: #90EE90;
    cursor: pointer;
    margin-top: 15px;
    transition: 0.5s;

    &:hover{
        background-color: #32CD32;
    }
}

@media  ( min-width: 1000px ) {
    justify-content: space-between;    

    p {
        font-size: 1.2rem;
    }
}
`;