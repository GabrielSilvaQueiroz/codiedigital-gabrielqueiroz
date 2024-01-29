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
                    <Link href='/'>  <ButtonImage> <Image src={WhitePokeboll} alt='White-Pokeboll' width="27" height="23" /> Centro Pokémon </ButtonImage> </Link>

                    <ListaItems>
                        <Items>
                            <Link href='/quem-somos'>  <ButtonQuemSomos> Quem Somos  </ButtonQuemSomos> </Link>
                        </Items>
                        <Items>
                            <Link href='/agendar-consulta'> <ButtonAgendarConsultar> Agendar Consulta </ButtonAgendarConsultar> </Link>
                        </Items>
                    </ListaItems>

                </DivNavbar>

            </IconsNavbar>
        </>
    )
}