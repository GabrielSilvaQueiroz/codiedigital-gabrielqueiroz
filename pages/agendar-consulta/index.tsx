import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { DivConteudo, Header, ContainerItems, RotasHeader, ParagrafoHeader, TituloHeader } from '../../styles/quem-somos/style'
import { Container } from '../../components/Layout/style';
import { capturaNome, capturaCidades, capturaRegioes } from '../api/pokeapi/pokeapiDados'

export default function agendarConsulta() {

    const [nomeDosPokemons, setNomeDosPokemons] = useState<string[]>([]);
    const [nomeDasCidades, setNomeDasCidades] = useState<string[]>([]);
    const [nomeDasRegioes, setNomeDasRegioes] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const nomesPokemons = await capturaNome();
                const nomesCidades = await capturaCidades();
                const nomesRegioes = await capturaRegioes();

                setNomeDosPokemons(nomesPokemons);
                setNomeDasCidades(nomesCidades);
                setNomeDasRegioes(nomesRegioes);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <ContainerItems>
                <Header>
                    <Head>
                        <title>Centro Pokémon - Agendar Consulta </title>
                    </Head>
                    <RotasHeader> Home {">"} Agendar Consulta </RotasHeader>
                    <TituloHeader> Agendar Consulta </TituloHeader>
                    <ParagrafoHeader> Recupere seus pokémons em 5 segundos.</ParagrafoHeader>
                </Header>
                <DivConteudo>
                    <h2> Preencha o formulário abaixo para agendar sua consulta </h2>
                    <ul>
                        <li>Nomes de Pokémons: {nomeDosPokemons.join(', ')}</li>
                        <li>Nomes de Cidades: {nomeDasCidades.join(', ')}</li>
                        <li>Nomes de Regiões: {nomeDasRegioes.join(', ')}</li>
                    </ul>

                </DivConteudo>
            </ContainerItems>
        </>
    )
}