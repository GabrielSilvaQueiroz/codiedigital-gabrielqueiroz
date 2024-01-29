import ImageBackground from '../public/images/pokemon-hero.jpg'
import Image from 'next/image'
import { Title, DivTitleBackground } from '../styles/index'
import { Container } from '../styles/Layout/style'

export default function Home() {
  return (
    <Container>
      <DivTitleBackground>
        <Title>Cuidamos bem do seu pokémon, para ele cuidar bem de você.</Title>
      </DivTitleBackground>
    </Container>
  )
}
