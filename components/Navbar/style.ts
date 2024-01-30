import styled from 'styled-components'

export const IconsNavbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
padding: 1em 1.2em;
background-color: #FFFFFF;
color: black;
`

export const ButtonImage = styled.button`
background-color: #E40F10;
color: white;
display: flex;
align-items: center;
border: none;
border-radius: 30px;
width: 155px;
height: 39px;
gap: 7px;
cursor: pointer;

img {
    margin-left: 5px ;
}

&:active {
    opacity: 0.4;
}

`

export const DivNavbar = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
background-color: #FFFFFF;
color: black;
`

export const ListaItems = styled.ul`
display: flex;
list-style: none;
`

export const Items = styled.li`
display: flex;
margin-right: 1.3em;
cursor: pointer;
`

export const ButtonAgendarConsultar = styled.button`
background-color: #E40F10;
color: white;
cursor: pointer;
border: none;
border-radius: 30px;
width: 140px;
height: 30px;
&:hover {
    opacity: 0.6;
}

&:active {
    opacity: 0.4;
}
`

export const ButtonQuemSomos = styled.button`
background-color: white;
color: black;
cursor: pointer;
border: none;
border-radius: 12px;
width: 140px;
height: 30px;

&:hover {
    color: #E40F10;
    opacity: 0.6;
}

&:active {
    color: #E40F10;
    opacity: 0.4;
}
`