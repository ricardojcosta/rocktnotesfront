import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1> Introdução ao React</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            inventore natus eius autem doloribus mollitia quis debitis
            distinctio, dolorum non esse amet magni quisquam illo maiores quo
            ipsa. Voluptatibus, atque? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nobis nulla aliquid accusamus eligendi dolores
            repellendus esse cum deserunt id alias consequatur hic fuga
            similique ad, aut voluptatibus doloremque exercitationem delectus.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node.js" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
