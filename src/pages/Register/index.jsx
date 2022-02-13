import React from "react";

import { useNavigate } from "react-router-dom";

//* Hook De Formulario React
import FormRegister from "../Form-Register";

import { Container, DivImg, DivForm, ButtonGoBack } from "./style";

//* Icon Back
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Register = ({ id }) => {

    const navigate = useNavigate();

    return (

    <Container id={id}>

        <ButtonGoBack onClick={() => navigate( - 1 )} >
            <BsFillArrowLeftCircleFill />
        </ButtonGoBack>

        <DivImg>
            <img src="images/bloco_final_image.svg" alt="" />
        </DivImg>
       
        <DivForm>
            <FormRegister />
        </DivForm>


    </Container>

    );
};

export default Register