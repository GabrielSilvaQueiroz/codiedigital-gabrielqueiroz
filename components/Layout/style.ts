import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
min-height: calc(100vh - 90px);
box-sizing: border-box; /* Certifica-se de que as bordas e preenchimentos não afetam as dimensões totais */

`
export const Container = styled.div`
background-image: url('https://i.ibb.co/hD5GmZg/pokemon-hero-correta.jpg');
display: flex;
justify-content: center;
flex-direction: column;
background-size: cover;
width: 100%;
height: 100vh;
`