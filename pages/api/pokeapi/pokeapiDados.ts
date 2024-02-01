import axios from 'axios';

const apiPokemon = 'https://pokeapi.co/api/v2/';

// Função responsável por tratar a primeira letra da palavra, deixando ela maiuscula.
const primeiraLetraMaiuscula = (palavra: string): string => {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
};

// Função responsável por buscar o nome dos Pokémons
export async function capturaNome(): Promise<string[]> {
    try {
        const resposta = await axios.get(`${apiPokemon}pokemon?limit=8`); // Limite de 6 pokémons
        const nomeDosPokemons = resposta.data.results.map((pokemon: any) => primeiraLetraMaiuscula(pokemon.name)); //

        return nomeDosPokemons
    } catch (error) {
        console.error('Erro ao obter nomes dos pokémons', error);
        throw error;
    }
}

// Função responsável por buscar o nome das cidades
export async function capturaCidades(): Promise<string[]> {
    try {
        const resposta = await axios.get(`${apiPokemon}location?limit=8`);
        const nomeDasCidades = resposta.data.results.map((city: any) => city.name);


        for (let i = 0; i < nomeDasCidades.length; i++) {
            const palavras = nomeDasCidades[i].split("-");

            for (let j = 0; j < palavras.length; j++) {
                palavras[j] = palavras[j][0].toUpperCase() + palavras[j].substr(1);
            }

            nomeDasCidades[i] = palavras.join(" ");

        }


        return nomeDasCidades;
    } catch (error) {
        console.error('Erro ao obter nomes das cidades', error);
        throw error;
    }
}

// Função responsável por buscar o nome das regiões
export async function capturaRegioes(): Promise<string[]> {
    try {
        const resposta = await axios.get(`${apiPokemon}region?limit=8`);
        const nomeDasRegioes = resposta.data.results.map((region: any) => primeiraLetraMaiuscula(region.name));

        return nomeDasRegioes;
    } catch (error) {
        console.error('Erro ao obter nomes das regiões', error);
        throw error;
    }
}

// Exemplo de uso
export async function validandoDados() {
    try {
        const nomeDosPokemons = await capturaNome();
        const nomeDasCidades = await capturaCidades();
        const nomeDasRegioes = await capturaRegioes();

        // console.log('Nomes de Pokémons:', nomeDosPokemons);
        // console.log('Nomes de Cidades:', nomeDasCidades);
        // console.log('Nomes de Regiões:', nomeDasRegioes);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// validandoDados()

// npx tsc pokeapiDados.ts