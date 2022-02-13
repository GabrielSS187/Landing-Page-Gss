import styled from "styled-components";

export const Container = styled.div`

header {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        padding: 0px 10px 0px 20px;
        height: 10vh;
        width: 100%;

        #btn-register {
            cursor: pointer;
            color: #90EE90;
            transition: 0.5s;
        }

        h1 {
            color: #90EE90;
        }
        
        a {
            text-decoration: none;
            color: #90EE90;
            transition: 0.5s;
        }

        #div-organization {
            display: flex;
            justify-content: space-between;
            gap: 30px;
            list-style: none;
    }
}//! Header

#btn-mobile {
    display: none;
}

//! Ajustando Para Pc @medias
@media  ( min-width: 1000px ) {
    header {
        width: 100%;
    }
}

@media  ( min-width: 1250px ) and ( min-height: 620px ) {
    header {
        width: 97%;
    }
}

@media ( min-width: 801px ) {
    header {
        justify-content: space-between;
    }
}

    //! Moto G4 O Problematico
    @media screen and ( min-width: 360px) and ( max-height: 640px ) {
        header > h1 {
            font-size: 1.5rem;
        }

        #menu {
            padding-right: 31px;
        }
    }//! G4

    @media screen and ( max-width: 760px ) {
        #header {
            justify-content: space-around;
        }   
    }
    //! Pc ------------------------------------------------------------------

    //! Menu Anburgger
    @media screen and ( max-width: 755px ) {

        #menu {
            display: block;
            position: absolute;
            width: 50%;
            /* top: 50px; */
            right: 0px;
            background-color: white;
            z-index: 1000;
            height: 0px;
            transition: 0.6s;
            visibility: hidden;
            overflow-y: hidden;
        }
        
        #div-organization {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 50px;
            padding-top: 30px;
            font-size: 1.2rem;
        }

        #nav.active #menu {
            height: 70vh;
            visibility: visible;
            overflow-y: auto;
        }

        #menu a {
            padding: 1rem 0;
            margin: 0 1rem;
            border-bottom: 2px solid #90EE90;
        }

        #btn-mobile {
            display: flex;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            border: none;
            background: none;
            color: #90EE90;
            cursor: pointer;
            gap: 0.5rem;
        }

        #hamburger {
            border-top: 3px solid #90EE90;
            width: 30px;
        }

        #hamburger::after, #hamburger::before {
            content: "";
            display: block;
            width: 30px;
            height: 3px;
            background-color: currentColor;
            margin-top: 7px;
            transition: 0.3s;
            position: relative;
        }

        #nav.active #hamburger {
            border-top-color: transparent;
        }

        #nav.active #hamburger::before {
            transform: rotate( 135deg );
        }
        #nav.active #hamburger::after {
            transform: rotate( -135deg );
            top: -10px;
        }
    } //! @media
`;

export const BtnTop = styled.button`

border: none;
border-radius: 50%;
font-size: 1.7rem;
background: none;

position: fixed;
top: 85vh;
left: 95%;

> a {
    text-decoration: none;
}

//! @media
@media  screen and ( max-width: 400px ) {
    left: 87%;
}

@media screen and ( max-width: 590px ) {
    left: 90%;
}

@media  screen and ( max-width: 970px ) {
    left: 90%;
}
//!-------------------------------------------------------

`;

export const Footer = styled.footer`

display: flex;
align-items: center;
justify-content: center;

background-color: transparent;
height: 3.5vh;
width: 100%;
color: white;
font-size: 8px;
text-align: center;
color: black;
margin-top: 33px;

/* @media screen and (min-width: 414px) and ( max-height: 896px ) {
    width: 103%;
} */

`;