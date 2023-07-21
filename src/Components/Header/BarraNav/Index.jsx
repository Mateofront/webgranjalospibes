import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BoxBarraNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    width: 85%;

    @media (max-width: 800px) {
        display: none;
    }
`

const DivBarra1 = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 4%;

    @media (max-width: 800px) {
        display: none;
    }
`
const DivBarra2 = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-right: 4%;

    @media (max-width: 800px) {
        display: none;
    }
`

const Marcador = styled.div`
    &:hover{
        border-bottom: 2px solid #D6D582;
    }
`

const Boton = styled.button`
    background-color: #D6D582;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    width: 8rem;
    height: 2rem;
    border: none;
    font-family: Manrope;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        transition: .3s;
        transform: scale(1.1);
        background-color: #c9c86f ;
        color: #ffffff;
    }

    @media (max-width: 800px) {
        display: flex;
        justify-content:center;
        align-items: center;
        font-size: 0.8rem;
        width: 6rem;
        margin-bottom: 0.5rem;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: Manrope;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: #464646;
  &:hover {
    text-decoration: none;
    color: #464646;
  }

  @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items:center;
        color: #464646;
        font-size: 0.8rem;
        width: 100%;
        margin:0;
    }
`;


const BarraNav = () => {
    return(
        <BoxBarraNav>
                <DivBarra1>
                    <Marcador><StyledLink to="/" style={{}}>INICIO</StyledLink></Marcador>
                    <Marcador><StyledLink to="/quienes-somos" style={{}}>QUIÉNES SOMOS</StyledLink></Marcador>
                    <Marcador><StyledLink to="/contacto" style={{}}>CONTACTO</StyledLink></Marcador>
                </DivBarra1>
                <DivBarra2>
                    <Marcador><StyledLink to="/padrinos" style={{}}>PADRINOS</StyledLink></Marcador>
                    <StyledLink to="/donar" style={{}}><Boton>DONAR</Boton></StyledLink>
                </DivBarra2>
        </BoxBarraNav>
    )
}

export default BarraNav