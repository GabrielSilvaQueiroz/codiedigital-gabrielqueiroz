import React from 'react';
import Head from 'next/head';
import { DivConteudo, Header, ContainerItems, RotasHeader, ParagrafoHeader, TituloHeader } from '../../styles/agendar-consulta/style'
import Image from 'next/image';
import ImagemSucesso from '../../public/check.svg'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { ButtonNovoAgendamento, DivResultado, TextoMenor, TituloDaPagina } from '../../styles/agendamento-resultado/style'


export default function agendamentoSucesso() {

    const router = useRouter();
    const { data, hora, numPokemons } = router.query;
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
                        <TituloDaPagina> Consulta Agendada </TituloDaPagina>
                        <Image src={ImagemSucesso} alt='Imagem de Sucesso Ao Agendar Consulta' width="40" height="40" />
                        <TextoMenor>
                            Seu agendamento para dia {data} às {hora}, para {numPokemons} pokémons foi realizado com sucesso
                        </TextoMenor>
                        <Link href='/agendar-consulta'>  <ButtonNovoAgendamento> Fazer Novo Agendamento </ButtonNovoAgendamento> </Link>
                    </DivResultado>

                </DivConteudo>
            </ContainerItems>
        </>
    )
}