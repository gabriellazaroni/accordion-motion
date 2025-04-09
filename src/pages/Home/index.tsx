import { useState } from "react";
import { Gallery } from "../../components/Galery";
import { galleryItems } from "../../data/data";
import { Container, Header, LogoImg } from "./styles";
import logo from '../../assets/logo.svg'

export function Home() {
  const [index, setIndex] = useState<number>(5);

  return (
    <Container>
      <Header>
        <LogoImg src={logo} />
      </Header>
      <Gallery items={galleryItems} index={index} setIndex={setIndex} />
    </Container>
  )
}


