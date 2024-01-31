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

export const DivContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin-top: 10px;
`

export const DivSeparaBox = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin-bottom: 10px;
`

export const Teste = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items:center;
`

export const DivBox = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
margin: 10px 0px 10px 0px ;
`

export const DivFinishButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 30px;
width: 100%;

button {
width: 183px;
height: 42px;
flex-shrink: 0;
border-radius: 30px;
background: #E40F0F;
color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
cursor: pointer;
}

button:hover {
    opacity: 0.8;
}

button:active {
    opacity: 0.6;
}
`

export const Titulos = styled.p`
color: #1D1D1D;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: center;
`

export const Form = styled.form`
display: block;
margin: 0px 10px;
height: 100vh;
margin-bottom: 30px;
`

export const TituloPrincipal = styled.p`
color: #1D1D1D;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: center;
margin-top: 20px;
margin-bottom: 35px;
`

export const DivInput = styled.div`
display: flex;
flex-direction: column;
width: 100%;

`

export const DivDadosAgendaConsulta = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1.1rem;
width: 100%;
text-align: end;
`

export const BarraHorizontal = styled.div`
    height: 1px;
    background: #D5D5D5;
    width: 100%;
    margin-bottom: 20px;
`

export const TextoFormulario = styled.label`
color: #1D1D1D;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-right: 3px;
`

export const InputFormulario = styled.input`
width: 265px;
height: 38px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid #D5D5D5;
cursor: pointer;
padding-left: 8px;
color: #747474;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;

&:hover {
    opacity: 0.8;
    border-color: #E41110;
}

&:focus-visible {
    border-color: #E41110;
    border-radius: 1px solid #E41110 ;
}

&:active {
    border-color: #E41110;
    border-radius: 1px solid #E41110 ;
}

&::placeholder{
padding-left: 0.3px;
color: #747474;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
}

&:text {
padding-left: 12px;
color: #747474;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal; 
}

`

export const SelectFormulario = styled.select`
width: 265px;
height: 38px;
flex-shrink: 0;
border-radius: 8px;
margin-bottom: 15px;
border: 1px solid #D5D5D5;
cursor: pointer;
padding-left: 3px;
color: #747474;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;

& option[disabled]:first-child {
    display: none;
  }

&:hover {
    opacity: 0.8;
    border-color: #E41110;
}

&:focus-visible {
    border-color: #E41110;
    border-radius: 1px solid #E41110 ;
}

&:active {
    border-color: #E41110;
    border-radius: 1px solid #E41110 ;
}

`

export const SelectPokemon = styled.select`
width: 85%;
height: 38px;
border-radius: 8px;
margin-bottom: 15px;
border: 1px solid #D5D5D5;
cursor: pointer;
color: #747474;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;

&:hover {
    opacity: 0.8;
    border-color: #E41110;
}

&:focus-visible {
    border-color: #E41110;
    border-radius: 1px solid #E41110 ;
}

&:active {
    border-color: #E41110;
    border-radius: 1px solid #E41110 ;
}

`

export const TextoMenor = styled.p`
color: #747474;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 20px;
`

export const TextoObservacoesFinais = styled.p`
color: #747474;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const TextoMenorObservacoesFinais = styled.p`
color: #747474;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const ButtonAdicionaPokemon = styled.button`
width: 253px;
height: 42px;
background: #FFF;
color: #1D1D1D;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
border-radius: 18px;
cursor: pointer;
margin: 20px 0px 20px 0px;

&:hover {
    opacity: 0.8;
    border-color: #E41110;
    color: #E41110;

    strong {
        color: #E41110;  
    }
}

&:focus-visible {
    border-color: #E41110;
    border-radius: 1px solid #E41110 ;
}

&:active {
    border-color: #E41110;
    border-radius: 1px solid #E41110;
    opacity: 0.6;
}

strong {
color: #1D1D1D;
font-size: 16px;
font-style: normal;
font-weight: 700;
margin-left: 2px;
margin-top: 50px;
}

`