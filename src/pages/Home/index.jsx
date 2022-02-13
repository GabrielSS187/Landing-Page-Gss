import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

//* Pages
import HealthyRecipes from "../Healthy-Recipes";
import Blog from "../Blog";
import BestRecipes from "../Best-Recipes";
import Services from "../Services";

//* Icone Top
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import { Container, BtnTop, Footer } from "./style";

const Home = () => {

    const [ btnMobile, setBtnMobile ] = useState( false );
    
    const navigate = useNavigate();

    const toggleMenu = () => {
      const nav = document.getElementById("nav");
      nav.classList.toggle("active");
      setBtnMobile( !btnMobile );
    };

    return (

        <Container>

            <header id="header">

            <h1>Healthy Food</h1>

            <nav id="nav">
                <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" onClick={toggleMenu}>Menu
                <span id="hamburger"></span>
                </button>

                <ul id="menu">
                <div id="div-organization">
                    <li><a href="#healthy">healthy recipes</a></li>
                    <li><a href="#Best-Recipes">Best Recipes</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Blog">Blog</a></li>
                    <li onClick={() => navigate("/Register")} id="btn-register" >
                        <p>Resgister</p>
                    </li>
                </div>
                </ul>
            </nav>
            </header>

            {/* //* Components */}
                <HealthyRecipes id="healthy" />

                <BestRecipes id="Best-Recipes" />

                <Services id="Services" />

                <Blog id="Blog" />

                {/* <Register id="Register"/> */}

                {/* //* -------------------------------- */}

                <BtnTop>
                    <a href="#healthy">
                        <BsFillArrowUpCircleFill />
                    </a>
                </BtnTop>

                <Footer>
                   <p>Feito por: Gabriel Silva 11/02/2022</p>
                </Footer>

        
        </Container>

    );
};

export default Home;