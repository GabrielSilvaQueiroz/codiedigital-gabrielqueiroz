import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

interface ButtonImageProps {
    ocultarTexto: boolean;
}


export const IconsNavbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
padding: 1em 1.2em;
background-color: #FFFFFF;
color: black;
`

export const ButtonImage = styled.button<ButtonImageProps>`
    background-color: #E40F10;
    color: white;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 30px;
    width: ${(props) => (props.ocultarTexto ? '38px' : '155px')};
    height: ${(props) => (props.ocultarTexto ? '39px' : '39px')};
    gap: 7px;
    cursor: pointer;

    img {
        margin-left: 5px;
    }

    span {
    display: block;
    color: white;
    opacity: ${(props) => (props.ocultarTexto ? '0' : '1')};
    transition: opacity 0.3s ease;  // Adicione esta linha para uma transição suave
}

&:hover {
    width: 155px;
    height: 39px;

    span {
        opacity: 1;
    }
}

    &:active {
        opacity: 0.4;
    }
`;

export const DivNavbar = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
background-color: #FFFFFF;
color: black;
`

export const ListaItems = styled.ul`
display: flex;
list-style: none;
`

export const Items = styled.li`
display: flex;
margin-right: 1.3em;
cursor: pointer;
`

export const ButtonAgendarConsultar = styled.button`
background-color: #E40F10;
color: white;
cursor: pointer;
border: none;
border-radius: 30px;
width: 140px;
height: 30px;
&:hover {
    opacity: 0.6;
}

&:active {
    opacity: 0.4;
}
`

export const ButtonQuemSomos = styled.button`
background-color: white;
color: black;
cursor: pointer;
border: none;
border-radius: 12px;
width: 140px;
height: 30px;

&:hover {
    color: #E40F10;
    opacity: 0.6;
}

&:active {
    color: #E40F10;
    opacity: 0.4;
}
`