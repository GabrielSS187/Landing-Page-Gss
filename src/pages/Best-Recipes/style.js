import styled from "styled-components";

export const Container = styled.div`

height: 120vh;
width: 100%;

@media  ( min-width: 1000px ) {
    height: 100vh;
    padding-top: 90px;
}


@media screen and ( min-width: 850px ) {
    height: 80vh;
}
`;

export const DivText = styled.div`

height: 20vh;
display: flex;
flex-direction: column;
align-items: center;

h2 {
font-size: 1.9rem;
color: #483D8B;
}

p {
    width: 85%;
    padding-top: 10px;
    text-align: center;
    font-size: 1.2rem;
    color: #000080;
}

@media screen and ( min-width: 650px ) {
    height: 12vh;
}
`;

export const SectionRecipes = styled.section`

height: 99vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
padding-top: 10px;
overflow: auto;

@media screen and ( min-width: 850px ) {
    height: 50vh;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px 150px;
    justify-items: center;
    margin: auto;
    gap: 29px;
}//! @media 1

@media screen and ( min-width: 649px ) {
    height: 100vh;
    margin-top: 30px;
}//!@media 2

@media  ( min-width: 1100px ) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 170px 170px;
    justify-items: center;
}//! @media 2
`;

export const DivItems = styled.div`

height: 22vh;
width: 80%;
display: flex;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;;

.item-1 {

    display: flex;
    flex-direction: column;
    justify-content: center;

     img {
        height: 21vh;
        width: 100%;
     }
}//! Item 1

.item-2 {

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 190px;
    padding-left: 15px;

    p {
        font-size: 1.4rem;
        color: #483D8B;
        font-weight: bold;
    }

    button {
     
        height: 5vh;
        width: 55%;
        border: none;
        border-radius: 5px;
        color: white;
        background-color: #90EE90;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            background-color: #32CD32;
        }//! Hover
    }//! Button

}//! Item 2

@media screen and ( min-width: 850px ) {
    width: 90%;
    height: 25vh;
}

`;