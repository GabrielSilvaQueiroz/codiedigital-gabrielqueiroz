import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import WhitePokeboll from '../../../public/images/white-pokeball.svg'
import { IconsNavbar, ButtonImage, DivNavbar, ListaItems, Items, ButtonAgendarConsultar, ButtonQuemSomos } from '../../../styles/Navbar/style'

export default function Navbar() {
    return (
        <>
            <IconsNavbar>
                <DivNavbar>
                    <ButtonImage> <Image src={WhitePokeboll} alt='White-Pokeboll' width="27" height="23" /> Centro Pokémon </ButtonImage>

                    <ListaItems>
                        <Items>
                            <Link href='/quemSomos'> <a>  <ButtonQuemSomos> Quem Somos  </ButtonQuemSomos> </a> </Link>
                        </Items>
                        <Items>
                            <Link href='/agendarConsulta'> <a> <ButtonAgendarConsultar> Agendar Consulta </ButtonAgendarConsultar> </a> </Link>
                        </Items>
                    </ListaItems>

                </DivNavbar>

            </IconsNavbar>
        </>
    )
}