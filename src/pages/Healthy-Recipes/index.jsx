import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

import { Container, SubDiv, DivImg, DivInfo, DivInput } from "./style";

const HealthyRecipes = ({ id }) => {

    return (

        <Container id={id}>

          <SubDiv>
            <DivImg>
                    <img src="images/Illustration.svg" alt="logo-nutricional"/>
              </DivImg>

              <DivInfo>
                    <h2>Ready for Trying a new recipe?</h2>
                    <DivInput>
                        <div className="input-style">
                            <input type="text" placeholder="Search healthy recipes" />
                        </div>
                        <div className="lupa">
                            <AiOutlineSearch />
                        </div>
                    </DivInput>
              </DivInfo>

          </SubDiv>

        </Container>

    );
};

export default HealthyRecipes;