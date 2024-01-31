import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { DivConteudo, Header, ContainerItems, RotasHeader, ParagrafoHeader, TituloHeader, } from '../../styles/quem-somos/style'
import { Form, DivInput, DivBox, DivFinishButton, TextoFormulario, InputFormulario, Titulos, TituloPrincipal, DivContainer, SelectFormulario, TextoMenor, TextoObservacoesFinais, TextoMenorObservacoesFinais, ButtonAdicionaPokemon, SelectPokemon, DivDadosAgendaConsulta, BarraHorizontal, DivSeparaBox } from '../../styles/agendar-consulta/style'
import { capturaNome, capturaCidades, capturaRegioes } from '../api/pokeapi/pokeapiDados'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    nome: String,
    sobrenome: String,
    cidades: String,
    regioes: String,
    pokemons: { [key: string]: string };
    data: String,
    horario: String;
    pokemonStateKey: String

};

type DynamicKeys = `${keyof Inputs}.${number}`;

export default function agendarConsulta() {

    const [nomeDosPokemons, setNomeDosPokemons] = useState<string[]>([]);
    const [nomeDasCidades, setNomeDasCidades] = useState<string[]>([]);
    const [nomeDasRegioes, setNomeDasRegioes] = useState<string[]>([]);
    const [dates, setDates] = useState<string[]>([]);
    const [horariosDisponiveis, setHorariosDisponiveis] = useState<string[]>([]);
    const [numPokemons, setNumPokemons] = useState<number>(0);
    const [numPokemonsSelecionados, setNumPokemonsSelecionados] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //Busca os dados dos pokémons, cidades e regiões na API da PokéAPI
                const nomesPokemons = await capturaNome();
                const nomesCidades = await capturaCidades();
                const nomesRegioes = await capturaRegioes();

                setNomeDosPokemons(nomesPokemons);
                setNomeDasCidades(nomesCidades);
                setNomeDasRegioes(nomesRegioes);

                //Busca as datas disponíveis na API de data
                const buscaData = await fetch('http://localhost:3000/api/scheduling/date');
                const data = await buscaData.json();
                setDates(data);


                //Busca os horários disponíveis na API de horário
                const buscaHorario = await fetch('http://localhost:3000/api/scheduling/time', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const horariosDisponiveis = await buscaHorario.json();
                setHorariosDisponiveis(horariosDisponiveis);

            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


    const renderPokemonFields = () => {
        const fields = [];

        // Itera sobre o número de Pokémon no time (até o limite de 6)
        for (let i = 0; i <= numPokemons; i++) {
            // Gera uma chave única para identificar cada estado de Pokémon
            const pokemonStateKey: DynamicKeys = `pokemons.${i}`;

            // Adiciona um bloco div para cada Pokémon no array 'fields'
            fields.push(
                <div key={i}>
                    {/* Rótulo para identificar o Pokémon específico */}
                    <TextoFormulario> Pokémon {i + 1} </TextoFormulario>

                    {/* Select para escolher o Pokémon, utilizando o React Hook Form para registro e controle */}
                    <SelectPokemon
                        placeholder={`Selecione seu pokémon ${i}`}
                        {...register(pokemonStateKey)} // Registro do campo no React Hook Form
                        defaultValue="" // Valor inicial vazio
                    >
                        {/* Opção inicial vazia e desabilitada */}
                        <option value="" disabled hidden>Selecione seu pokémon</option>

                        {/* Mapeia os nomes dos Pokémon para opções no select */}
                        {nomeDosPokemons.map((pokemon, index) => (
                            <option key={index} value={pokemon}>
                                {pokemon}
                            </option>
                        ))}
                    </SelectPokemon>
                </div>
            );
        }

        return fields; // Retorna o array contendo os selects de Pokémon
    };

    const handleAddPokemon = () => {
        // Verifica se o número atual de Pokémon no array é menor que 6 (limite estabelecido no teste)
        if (numPokemons < 5) {
            // Atualiza o estado 'numPokemons', incrementando-o em 1
            setNumPokemons((prevNumPokemons) => prevNumPokemons + 1);

            setNumPokemonsSelecionados((prevNumPokemonsSelecionados) => prevNumPokemonsSelecionados + 1);
        }
    };


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
                    <TituloPrincipal> Preencha o formulário abaixo para agendar sua consulta </TituloPrincipal>

                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <DivSeparaBox>
                            <DivBox>
                                <DivInput>
                                    <TextoFormulario> Nome </TextoFormulario>
                                    <InputFormulario placeholder='Digite seu nome' type='nome' {...register("nome")} />
                                </DivInput>
                            </DivBox>
                            <DivBox>
                                <DivInput>
                                    <TextoFormulario> Sobrenome </TextoFormulario>
                                    <InputFormulario placeholder='Digite seu sobrenome' type='sobrenome' {...register("sobrenome")} />
                                </DivInput>
                            </DivBox>
                        </DivSeparaBox>


                        <DivContainer>
                            <DivBox>
                                <DivInput>
                                    <TextoFormulario> Região </TextoFormulario>
                                    <SelectFormulario placeholder='Selecione sua região' {...register("regioes")} defaultValue="">
                                        <option value="" disabled hidden>Selecione sua região</option>
                                        {nomeDasRegioes.map((regiao, index) => (
                                            <option key={index} value={regiao}>
                                                {regiao}
                                            </option>
                                        ))}
                                    </SelectFormulario>
                                </DivInput>
                            </DivBox>

                            <DivBox>
                                <DivInput>
                                    <TextoFormulario> Cidade </TextoFormulario>
                                    <SelectFormulario placeholder='Selecione sua cidade' {...register("cidades")} defaultValue="">
                                        <option value="" disabled hidden>Selecione sua cidade</option>
                                        {nomeDasCidades.map((cidade, index) => (
                                            <option key={index} value={cidade}>
                                                {cidade}
                                            </option>
                                        ))}
                                    </SelectFormulario>
                                </DivInput>
                            </DivBox>
                        </DivContainer>
                        <br></br>

                        <TextoFormulario> Cadastre seu time </TextoFormulario>
                        <TextoMenor> Atendemos até 06 pokemons por vez</TextoMenor>

                        <div>
                            {renderPokemonFields()}

                            <ButtonAdicionaPokemon type="button" onClick={handleAddPokemon} >
                                Adicionar um novo pokémon ao time...     <strong>+</strong>
                            </ButtonAdicionaPokemon>
                        </div>

                        <DivContainer>
                            <DivBox>
                                <DivInput>
                                    <TextoFormulario> Data para Atendimento </TextoFormulario>
                                    <SelectFormulario placeholder='Selecione uma data' {...register("data")} defaultValue="">
                                        <option value="" disabled hidden>Selecione uma data</option>
                                        {dates.map((data, index) => (
                                            <option key={index} value={data}>
                                                {data}
                                            </option>
                                        ))}
                                    </SelectFormulario>
                                </DivInput>
                            </DivBox>

                            <DivBox>
                                <DivInput>
                                    <TextoFormulario> Horário para Atendimento </TextoFormulario>
                                    <SelectFormulario placeholder='Selecione um horário' {...register("horario")} defaultValue="">
                                        <option value="" disabled hidden>Selecione um horário</option>
                                        {horariosDisponiveis.map((horariosDisponiveis, index) => (
                                            <option key={index} value={horariosDisponiveis}>
                                                {horariosDisponiveis}
                                            </option>
                                        ))}
                                    </SelectFormulario>
                                </DivInput>
                            </DivBox>
                        </DivContainer>

                        <BarraHorizontal></BarraHorizontal>

                        <DivContainer>
                            <DivInput>
                                <TextoObservacoesFinais> Número de pokémons a serem atendidos: </TextoObservacoesFinais>
                                <TextoObservacoesFinais> Atendimento unitário por pokémon: </TextoObservacoesFinais>
                                <TextoObservacoesFinais> Subtotal: </TextoObservacoesFinais>
                                <TextoObservacoesFinais> Taxa geracional: </TextoObservacoesFinais>
                            </DivInput>
                            <DivDadosAgendaConsulta>
                                <TextoObservacoesFinais> 0{numPokemonsSelecionados + 1} </TextoObservacoesFinais>
                                <TextoObservacoesFinais> R$ 70.00 </TextoObservacoesFinais>
                                <TextoObservacoesFinais> R$ {((numPokemonsSelecionados + 1) * 70.00).toFixed(2)} </TextoObservacoesFinais>
                                <TextoObservacoesFinais> R$ 2,10</TextoObservacoesFinais>
                            </DivDadosAgendaConsulta>
                        </DivContainer>
                        <TextoMenorObservacoesFinais> *Adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30% </TextoMenorObservacoesFinais>

                        <DivFinishButton>
                            <Titulos>Valor Total: R$ {((numPokemonsSelecionados + 1) * 72.10).toFixed(2)}</Titulos>

                            <button type="submit"> Concluir Agendamento </button>
                        </DivFinishButton>
                    </Form>

                </DivConteudo>
            </ContainerItems >
        </>
    )
}