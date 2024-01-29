import React from 'react';
import Head from 'next/head';
import { DivConteudo, Header, ContainerItems, RotasHeader, ParagrafoHeader, TituloHeader } from '../../styles/quem-somos/style'
import { Container } from '../../styles/Layout/style';

export default function quemSomos() {
    return (
        <>
            <ContainerItems>
                <Header>
                    <RotasHeader> Home > Quem Somos </RotasHeader>
                    <TituloHeader> Quem Somos </TituloHeader>
                    <ParagrafoHeader> A maior rede de tratamento pokémon.</ParagrafoHeader>
                </Header>
                <DivConteudo>
                    <h3> O Centro Pokémon </h3>
                    <br></br>
                    <h4> Como funciona a cura de um Pokémon?</h4>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi suscipit deleniti iste repellendus, aut error dolorem aspernatur autem ducimus quia placeat facere vero quam, delectus minus ab voluptas ea quibusdam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, dolore facilis inventore, adipisci porro eaque, aperiam in optio et eligendi nulla asperiores? Eius suscipit dolores perspiciatis veniam doloremque ratione eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit odio voluptas? Veritatis, debitis! Ducimus, cumque! Quae necessitatibus temporibus repellat aliquid dolor soluta accusantium minus dolorem quisquam, possimus labore molestias.</p>
                    <br></br>
                    <h4> Uma tradição de mais de 20 anos</h4>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi suscipit deleniti iste repellendus, aut error dolorem aspernatur autem ducimus quia placeat facere vero quam, delectus minus ab voluptas ea quibusdam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, dolore facilis inventore, adipisci porro eaque, aperiam in optio et eligendi nulla asperiores? Eius suscipit dolores perspiciatis veniam doloremque ratione eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit odio voluptas? Veritatis, debitis! Ducimus, cumque! Quae necessitatibus temporibus repellat aliquid dolor soluta accusantium minus dolorem quisquam, possimus labore molestias.</p>
                    <br></br>
                    <h4> O melhor para seu pokémon </h4>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi suscipit deleniti iste repellendus, aut error dolorem aspernatur autem ducimus quia placeat facere vero quam, delectus minus ab voluptas ea quibusdam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, dolore facilis inventore, adipisci porro eaque, aperiam in optio et eligendi nulla asperiores? Eius suscipit dolores perspiciatis veniam doloremque ratione eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit odio voluptas? Veritatis, debitis! Ducimus, cumque! Quae necessitatibus temporibus repellat aliquid dolor soluta accusantium minus dolorem quisquam, possimus labore molestias.</p>
                    <br></br>
                    <h4> Alta Tecnologia </h4>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi suscipit deleniti iste repellendus, aut error dolorem aspernatur autem ducimus quia placeat facere vero quam, delectus minus ab voluptas ea quibusdam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, dolore facilis inventore, adipisci porro eaque, aperiam in optio et eligendi nulla asperiores? Eius suscipit dolores perspiciatis veniam doloremque ratione eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit odio voluptas? Veritatis, debitis! Ducimus, cumque! Quae necessitatibus temporibus repellat aliquid dolor soluta accusantium minus dolorem quisquam, possimus labore molestias.</p>
                    <br></br>
                </DivConteudo>
            </ContainerItems>
        </>
    )
}