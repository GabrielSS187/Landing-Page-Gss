import styled from "styled-components";

export const Container =  styled.div`

height: 120vh;
display: flex;
flex-direction: column;
align-items: center;

.div-h2 {
    height: 7.5vh;
    font-size: 0.9rem;
    width: 59%;
    text-align: center;
    color: #483D8B;
    padding-top: 20px;
}

@media screen and (min-width: 400px ) {
    .div-h2 {
        padding-top: 15px;
        width: 58%;
    }
}

`;

export const Form = styled.form`

height: 85vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 25px;
gap: 10px;

div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        height: 6.5vh;
        width: 50%;
        border-radius: 5px;
        border: 1px solid #32CD32;
    }

    button {
        border-radius: 4px;
        border: none;
        height: 5.9vh;
        width: 30%;
        font-size: 1.2rem;
        margin-top: 10px;
        background-color: #90EE90;
        color: white;
        cursor: pointer;
        transition: 0.5s;

        &:hover{
            background-color: #32CD32;
            }
        }

        @media screen and (min-width: 400px ) {
            padding-top: 5px;

            input {
                width: 65%;
            }
        }
   
        @media ( min-width: 1000px ) {

            input {
                width: 100%;
            }
        }

}
`;