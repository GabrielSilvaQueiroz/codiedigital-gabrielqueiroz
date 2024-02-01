import styled from 'styled-components'

export const DivResultado = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
width: 408px;
height: 240px;
top: 548px;
left: 516px;
border-radius: 8px;
border: 1px solid #DF8686;
background-color: #DF86860A;
margin-top: 100px;
`

export const TituloDaPagina = styled.h2`
font-family: Inter;
font-size: 20px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
color: #1D1D1D;
`
export const TextoMenor = styled.p`
font-family: Inter;
font-size: 10px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color: #747474;
margin-top: 20px;
margin-bottom: 20px;
`

export const ButtonNovoAgendamento = styled.button`
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

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.6;
}
`