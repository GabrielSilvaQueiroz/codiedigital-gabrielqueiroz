import React from 'react';
import Head from 'next/head';
import { DivConteudo, Header, ContainerItems, RotasHeader, ParagrafoHeader, TituloHeader } from '../../styles/agendar-consulta/style'
import Image from 'next/image';
import ImageError from '../../public/warning.svg'
import Link from 'next/link'
import { ButtonNovoAgendamento, DivResultado, TextoMenor, TituloDaPagina } from '../../styles/agendamento-resultado/style'

interface AgendamentoError {
    message: string;
}

export default function agendamentoError({ error }: { error: AgendamentoError }) {

    return (
        <>
            <ContainerItems>
                <Head>
                    <title>Centro Pokémon - Agendar Consulta </title>
                </Head>
                <Header>
                    <RotasHeader> Home {">"} Agendar Consulta </RotasHeader>
                    <TituloHeader> Agendar Consulta </TituloHeader>
                    <ParagrafoHeader> Recupere seus pokémons em 5 segundos.</ParagrafoHeader>
                </Header>
                <DivConteudo>

                    <DivResultado>
                        <TituloDaPagina> Houve um problema no agendamento </TituloDaPagina>
                        <Image src={ImageError} alt='Imagem de Erro ao Realizar Consulta' width="40" height="40" />
                        <TextoMenor>{error.message}</TextoMenor>
                        <Link href='/agendar-consulta'> <ButtonNovoAgendamento> Fazer Novo Agendamnto </ButtonNovoAgendamento> </Link>
                    </DivResultado>

                </DivConteudo>
            </ContainerItems>
        </>
    )
}