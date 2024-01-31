import styled from 'styled-components'

export const DivConteudo = styled.div`
display: flex;
flex-direction: column;
margin-top: 28px;
max-width: 60%;
height: 100vh;
gap: 10px;
font-size: 85%;

h2 {
    justify-content: center;
    text-align: center;
    margin-bottom: 15px;
}
`

export const Header = styled.div`
display: flex;
width: 100%;
background-color: #e41110;
height: 140px;
color: white;
flex-direction: column;
gap: 10px;
`

export const ContainerItems = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
`
export const RotasHeader = styled.p`
margin-left: 50px;
margin-top: 25px;
font-size: 80%;
`

export const TituloHeader = styled.h1`
margin-left: 50px;
`

export const ParagrafoHeader = styled.p`
margin-left: 50px;
font-size: 80%;
margin-bottom: 15px;
`
