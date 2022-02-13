import  React, { useEffect } from "react";

import axios from "axios";

import { useForm } from "react-hook-form";

import { Container, Form } from "./style";

const FormRegister = () => {

const { register, handleSubmit, setValue, setFocus } = useForm();

//! Pegando e Guardando os valores do Form do Úsuario
const onSubmit = ( event ) => {

    const handleEvent = JSON.stringify( event );

    let validate = "";
    let local = "path=/"

    localStorage.setItem("informationUser", handleEvent);
    document.cookie = handleEvent +  "=" + validate + ";  " + local;

    alert("Seu registro foi feito");
    window.location.reload(true);
};

//! Verificar Si Tem Cookie e Local Storage
useEffect(() => {
    const cookieInformation = localStorage.getItem("informationUser");
    if ( cookieInformation !== null ) {
        return;
    } else {
        alert ( "Esse site coleta cookies, para melhorias futuras." );
    };
});

//! Verificando o Cep do Form
const checkCep = ( event ) => {

    event.preventDefault();

    const { value } = event.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if ( cep?.length !== 8 ) {
        return;
    };

    //! Requisição da Api de Ceps
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(({ data }) => {
        setValue("logradouro", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade",  data.localidade);
        setValue("estado", data.uf);
        setFocus("numero");
    })
    .catch(( err ) => {
        alert("Desculpe, algo deu errado :(");
        console.log(err.message);
    });
};  

    return (

        <Container>

            <div className="div-h2">
                <h2>Join our membership to get special offer</h2>
            </div>

             <Form onSubmit={ handleSubmit(onSubmit) }>

                 <div>
                    <input type="text"
                    placeholder="Nome"
                     {...register("nome")} 
                     required
                     />
                </div>

                <div>
                    <input type="text"
                    placeholder="CPF"
                    {...register("cpf")}
                      pattern="[0-9]{11}"
                     title="Digite o cpf corretamente!"
                     required
                     />
                </div>

                <div>
                    <input type="text" {...register("cep")} 
                    placeholder="Cep"
                    onBlur={checkCep}
                    pattern="[0-9]{5}-[0-9]{3}"
                    required
                    />
                </div>

                <div>
                    <input type="text"
                    placeholder="Logradouro"
                     {...register("logradouro")} 
                     required
                     />
                </div>

                <div>
                    <input type="number"
                    placeholder="Número"
                     {...register("numero")}
                     required
                     />
                </div>

                <div>
                    <input type="text" 
                    placeholder="Complemento, Não Obrigatorio"
                    {...register("complemento")} />
                </div>

                <div>
                    <input type="text" 
                    placeholder="Bairro"
                    {...register("bairro")} 
                    required
                    />
                </div>

                <div>
                    <input type="text" 
                    placeholder="Cidade"
                    {...register("cidade")}
                    required
                    />
                </div>

                <div>
                    <input type="text" 
                    placeholder="Estado"
                    {...register("estado")} 
                    required
                    />
                </div>

                <div>
                    <button type="submit">To Send</button>
                </div>

            </Form>

        </Container>

    );
};

export default FormRegister;