import styled from 'styled-components'
import Image from 'next/image'
import ImagemBackground from '../../public/images/pokemon-hero.jpg'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
min-height: calc(100% - 60px);

`
export const Container = styled.div`
background-image: url('https://i.ibb.co/hD5GmZg/pokemon-hero-correta.jpg');
/* background-image: url('../../public/images/pokemon-hero.jpg') ; */                    //Não consegui inserir dessa forma
display: flex;
justify-content: center;
flex-direction: column;
background-size: cover;
width: 100%;
height: 100vh;
`