import React from "react";

import { Container, SectionRecipes, DivText, DivItems } from "./style";

const BestRecipes = ({ id }) => {

    return (

        <Container id={id}>

            <div>
                <DivText>
                    <h2>Our Best Recipes</h2> 
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>
                </DivText>

                <SectionRecipes>

                    <DivItems>
                        <div className="item-1">
                            <img src="images/comida_1.svg"  alt="Broccoli Salad" />
                        </div>

                        <div className="item-2">
                            <p>Broccoli Salad with Bacon</p>
                            <button>See Recipe</button>
                        </div>
                    </DivItems>

                    <DivItems>
                        <div className="item-1">
                            <img src="images/comida_2.svg" alt="Classic Bee" />
                        </div>
                        
                        <div className="item-2">
                            <p>Classic Beef Burgers</p>
                            <button>See Recipe</button>
                        </div>
                    </DivItems>

                    <DivItems>
                        <div className="item-1">
                            <img src="images/comida_3.svg" alt="Classic Potato" />
                        </div>
                        
                        <div className="item-2">
                            <p>Classic Potato Salad</p>
                            <button>See Recipe</button>
                        </div>
                    </DivItems>

                    <DivItems>
                        <div className="item-1">
                            <img src="images/comida_4.svg" alt="Cherry Cobbleron the Grill" />
                        </div>
                        
                        <div className="item-2">
                            <p>Cherry Cobbler on the Gril</p>
                            <button>See Recipe</button>
                        </div>
                    </DivItems>
               
                </SectionRecipes>
            </div>

        </Container>

    );
};

export default BestRecipes;