import React from 'react';
import Head from 'next/head';
import { DivConteudo, Header, ContainerItems, RotasHeader, ParagrafoHeader, TituloHeader } from '../../styles/quem-somos/style'
import { Container } from '../../styles/Layout/style';

export default function agendarConsulta() {
    return (
        <>
            <ContainerItems>
                <Header>
                    <RotasHeader> Home > Agendar Consulta </RotasHeader>
                    <TituloHeader> Agendar Consulta </TituloHeader>
                    <ParagrafoHeader> Recupere seus pokémons em 5 segundos.</ParagrafoHeader>
                </Header>
                <DivConteudo>
                    <h1> Formulário </h1>
                </DivConteudo>
            </ContainerItems>
        </>
    )
}