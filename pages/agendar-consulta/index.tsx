import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import {
    DivConteudo,
    Header,
    ContainerItems,
    RotasHeader,
    ParagrafoHeader,
    TituloHeader,
    DivInput,
    DivBox,
    DivFinishButton,
    TextoFormulario,
    InputFormulario,
    Titulos,
    TituloPrincipal,
    DivContainer,
    SelectFormulario,
    TextoMenor,
    TextoObservacoesFinais,
    TextoMenorObservacoesFinais,
    ButtonAdicionaPokemon,
    SelectPokemon,
    DivDadosAgendaConsulta,
    BarraHorizontal,
    DivSeparaBox,
    Form,
} from '../../styles/agendar-consulta/style';
import { capturaNome, capturaCidades, capturaRegioes } from '../../pages/api/pokeapi/pokeapiDados';
import { Resolver } from 'react-hook-form';


type Pokemon = {
    [key: string]: string;
};

type Inputs = {
    numPokemonsSelecionados?: (number | undefined)[] | undefined;
    data: string;
    nome: string;
    sobrenome: string;
    cidades: string;
    regioes: string;
    horario: string;
    pokemons: Pokemon[];
};

type DynamicKeys = `${keyof Inputs}.${number}`;

export default function AgendarConsulta() {

    const [nomeDosPokemons, setNomeDosPokemons] = useState<string[]>([]);
    const [nomeDasCidades, setNomeDasCidades] = useState<string[]>([]);
    const [nomeDasRegioes, setNomeDasRegioes] = useState<string[]>([]);
    const [dates, setDates] = useState<string[]>([]);
    const [horariosDisponiveis, setHorariosDisponiveis] = useState<string[]>([]);
    const [numPokemons, setNumPokemons] = useState<number>(0);
    const [numPokemonsSelecionados, setNumPokemonsSelecionados] = useState<number>(0);

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const nomesPokemons = await capturaNome();
                const nomesCidades = await capturaCidades();
                const nomesRegioes = await capturaRegioes();

                setNomeDosPokemons(nomesPokemons);
                setNomeDasCidades(nomesCidades);
                setNomeDasRegioes(nomesRegioes);

                const buscaData = await fetch('http://localhost:3000/api/scheduling/date');
                const data = await buscaData.json();
                setDates(data);

                const buscaHorario = await fetch('http://localhost:3000/api/scheduling/time', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const horarios = await buscaHorario.json();
                setHorariosDisponiveis(horarios);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    // Função para renderizar campos de seleção de Pokémon dinamicamente
    const renderPokemonFields = () => {

        // Array para armazenar os campos renderizados
        const fields = [];

        // Loop para criar campos com base no número de Pokémon selecionados
        for (let i = 0; i <= numPokemons; i++) {
            // Chave dinâmica para associar o estado do Pokémon ao formulário
            const pokemonStateKey: DynamicKeys = `pokemons.${i}`;

            // Adiciona um bloco de seleção de Pokémon ao array de campos
            fields.push(
                <div key={i}>
                    <TextoFormulario> Pokémon {i + 1} </TextoFormulario>
                    <SelectPokemon placeholder={`Selecione seu pokémon ${i}`} {...register(pokemonStateKey)} defaultValue="">
                        <option value="" disabled hidden>
                            Selecione seu pokémon
                        </option>
                        {/* Mapeia os nomes dos Pokémon para opções no menu suspenso */}
                        {nomeDosPokemons.map((pokemon, index) => (
                            <option key={index} value={pokemon}>
                                {pokemon}
                            </option>
                        ))}
                    </SelectPokemon>
                </div>
            );
        }

        // Retorna o array de campos renderizados
        return fields;
    };

    // Função para adicionar um Pokémon ao formulário
    const handleAddPokemon = () => {

        // Verifica se o número de Pokémon já selecionados é menor que o limite (5)
        if (numPokemons < 5) {
            // Incrementa o número de Pokémon no estado local
            setNumPokemons((prevNumPokemons) => prevNumPokemons + 1);

            // Incrementa o número total de Pokémon selecionados no estado local
            setNumPokemonsSelecionados((prevNumPokemonsSelecionados) => prevNumPokemonsSelecionados + 1);
        }
    };

    const schema = yup.object({
        data: yup.string().required('A data é obrigatória'),
        nome: yup.string().required('O nome é obrigatório'),
        sobrenome: yup.string().required('O sobrenome é obrigatório'),
        cidades: yup.string().required('A cidade é obrigatória'),
        regioes: yup.string().required('A região é obrigatória'),
        horario: yup.string().required('O horário é obrigatório'),
        numPokemonsSelecionados: yup.array().of(yup.number().min(1).max(6)),
    });


    const resolver: Resolver<Inputs> = async (values) => {
        try {
            // Realiza a validação utilizando o esquema Yup
            await schema.validate(values, { abortEarly: false });

            // Se a validação for bem-sucedida, retorna os valores e nenhum erro
            return { values, errors: {} };
        } catch (errors: any) {
            // Se ocorrerem erros durante a validação, captura e trata os erros

            // Mapeia os erros internos do Yup para um objeto mais fácil de manipular
            const formErrors: Record<string, string> = errors.inner.reduce(
                (allErrors: Record<string, string>, currentError: yup.ValidationError) => {
                    return {
                        ...allErrors,
                        [currentError.path!]: currentError.message,
                    };
                },
                {}
            );
            // Retorna um objeto contendo valores vazios e os erros mapeados
            return { values: {}, errors: formErrors };
        }
    };

    const { register, handleSubmit, formState } = useForm<Inputs>({ resolver });
    const { errors } = formState;

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);

        // Verifica se não há erros de validação
        if (Object.keys(errors).length === 0) {
            // Se não houver erros, redireciona para a página de sucesso de agendamento
            router.push({
                pathname: '/agendamento-sucesso',
                query: {
                    data: data.data,
                    hora: data.horario,
                    numPokemons: numPokemonsSelecionados + 1,
                },
            });
        } else {
            // Se houver erros, cria uma mensagem de erro consolidada
            const errorMessage = Object.values(errors).join(', ');

            // Redireciona para a página de erro de agendamento com a mensagem de erro
            router.push({
                pathname: '/agendamento-error',
                query: { errors: errorMessage },
            });
        }
    };
    return (
        <>
            <ContainerItems>
                <Header>
                    <Head>
                        <title>Centro Pokémon - Agendar Consulta </title>
                    </Head>
                    <RotasHeader> Home {'>'} Agendar Consulta </RotasHeader>
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
                                    <InputFormulario placeholder="Digite seu nome" type="text" {...register('nome')} />
                                </DivInput>
                            </DivBox>
                            <DivBox>
                                <DivInput>
                                    <TextoFormulario> Sobrenome </TextoFormulario>
                                    <InputFormulario placeholder="Digite seu sobrenome" type="text" {...register('sobrenome')} />
                                </DivInput>
                            </DivBox>
                        </DivSeparaBox>

                        <DivContainer>
                            <DivBox>
                                <DivInput>
                                    <TextoFormulario> Região </TextoFormulario>
                                    <SelectFormulario placeholder="Selecione sua região" {...register('regioes')} defaultValue="">
                                        <option value="" disabled hidden>
                                            Selecione sua região
                                        </option>
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
                                    <SelectFormulario placeholder="Selecione sua cidade" {...register('cidades')} defaultValue="">
                                        <option value="" disabled hidden>
                                            Selecione sua cidade
                                        </option>
                                        {nomeDasCidades.map((cidade, index) => (
                                            <option key={index} value={cidade}>
                                                {cidade}
                                            </option>
                                        ))}
                                    </SelectFormulario>
                                </DivInput>
                            </DivBox>
                        </DivContainer>
                        <br />

                        <TextoFormulario> Cadastre seu time </TextoFormulario>
                        <TextoMenor> Atendemos até 06 pokemons por vez</TextoMenor>

                        <div>
                            {renderPokemonFields()}

                            <ButtonAdicionaPokemon type="button" onClick={handleAddPokemon}>
                                Adicionar um novo pokémon ao time... <strong>+</strong>
                            </ButtonAdicionaPokemon>
                        </div>

                        <DivContainer>
                            <DivBox>
                                <DivInput>
                                    <TextoFormulario> Data para Atendimento </TextoFormulario>
                                    <SelectFormulario placeholder="Selecione uma data" {...register('data')} defaultValue="">
                                        <option value="" disabled hidden>
                                            Selecione uma data
                                        </option>
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
                                    <SelectFormulario placeholder="Selecione um horário" {...register('horario')} defaultValue="">
                                        <option value="" disabled hidden>
                                            Selecione um horário
                                        </option>
                                        {horariosDisponiveis.map((horario, index) => (
                                            <option key={index} value={horario}>
                                                {horario}
                                            </option>
                                        ))}
                                    </SelectFormulario>
                                </DivInput>
                            </DivBox>
                        </DivContainer>

                        <BarraHorizontal />

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
            </ContainerItems>
        </>
    );
}
