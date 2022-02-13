import React from "react";

import { 
    Container,
     Section, 
     DivIformation,
     DivImg, 
     DivPernsona, 
     DivHeader,
    DivOrganization 
} from "./style";

const Blog = ({ id }) => {

    return (

        <Container id={id}>

            <DivHeader>
                <h2>Read Our Blog</h2>
                <p>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind text
                </p>
            </DivHeader>

            <Section>

                <DivIformation>
                    <DivImg>
                        <img src="images/blog_image_1.svg"  alt="Quick"></img>
                    </DivImg>

                    <DivPernsona>
                        <p>Quick-start guide to nuts and seeds</p>
                        <DivOrganization>
                            <div></div>
                            <span>Kevin Ibrahim</span>
                        </DivOrganization>
                    </DivPernsona>
                </DivIformation>

                <DivIformation>
                    <DivImg>
                        <img src="images/bloco_image_2.svg"  alt="Salada"></img>
                    </DivImg>

                    <DivPernsona>
                        <p>Nutrition: Tips for Improving Your Health</p>
                        <DivOrganization>
                            <div></div>
                            <span>Mike Jackso</span>
                        </DivOrganization>
                    </DivPernsona>
                </DivIformation>


             
                <DivIformation>
                    <DivImg>
                        <img src="images/bloco_image_3.svg"  alt="Uva"></img>
                    </DivImg>

                    <DivPernsona>
                        <p>The top 10 benefits of eating healthy</p>
                        <DivOrganization>
                            <div></div>
                            <span>Bryan McGregor</span>
                        </DivOrganization>
                    </DivPernsona>
                </DivIformation>
           

            </Section>

        </Container>

    );
};

export default Blog;