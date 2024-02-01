import Link from 'next/link'
import Image from 'next/image'
import WhitePokeboll from '../../public/images/white-pokeball.svg'
import { IconsNavbar, ButtonImage, DivNavbar, ListaItems, Items, ButtonAgendarConsultar, ButtonQuemSomos } from './style'
import React, { useState, useEffect } from 'react';

export default function Navbar() {

    // Cria um estado para gerenciar se o texto do botão deve ser ocultado ou exibido.
    const [ocultarTexto, setOcultarTexto] = useState(false);

    // useEffect para ocultar automaticamente o texto após 5 segundos.
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOcultarTexto(true);
        }, 5000);

        // Função de limpeza para cancelar o timeout quando o componente é desmontado
        return () => clearTimeout(timeoutId);
    }, []);


    // Para mostrar o texto no botão.
    const handleMouseEnter = () => {
        setOcultarTexto(false);
    };

    // Para ocultar o texto no botão.
    const handleMouseLeave = () => {
        if (!ocultarTexto) {
            setOcultarTexto(true);
        }
    };

    return (
        <>
            <IconsNavbar>
                <DivNavbar>
                    <Link href='/'>
                        <ButtonImage ocultarTexto={ocultarTexto} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> {/* Adicionar onMouseEnter */}
                            <Image src={WhitePokeboll} alt='White-Pokeboll' width="27" height="23" />
                            {!ocultarTexto && <span>Centro Pokémon</span>}
                        </ButtonImage>
                    </Link>

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