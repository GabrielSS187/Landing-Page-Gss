import React from "react";

import { Container, DivImg, DivParagraph } from "./style";

const Services = ({ id }) => {

    return (

        <Container id={ id }>
            

            <DivImg>
                <img src="images/bloco_services.svg" alt="logo-girl" />
            </DivImg>

            <DivParagraph>
                <h2>The best services ready To serve you</h2>
                <div>
                    <p>
                        Far far away, behind the word mountains, far from
                        the countries Vokalia and Consonantia, there live the blind texts
                    </p>
                    <p>
                        Separated they live in Bookmarksgrove right at the
                        coast of the Semantics, a large language ocean.
                    </p>
                    <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                    </p>
                </div>

                <button>Know More</button>
            </DivParagraph>

        </Container>

    );
};

export default Services;