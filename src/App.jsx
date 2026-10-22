import Aplicativo from "./Aplicativo"
import Cards from "./Cards"
import Depoimento from "./Depoimento"
import Header from "./Header"
import Hero from "./Hero"
import Marquee from "./Marquee"
import Rodape from "./Rodape"
import './style.css'
import Tabs from "./Tabs"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <Aplicativo titulo="Chega de ficar trocando de aplicativo" desc="Crie, edite, faça o layout e depois edite de novo... sem nunca sair do seu arquivo .af. O Affinity tem todas as ferramentas profissionais de design e edição de fotos que você precisa em um único app extremamente rápido e poderoso."/>
      <Tabs />
      <Depoimento texto="O Affinity deixa a gente se concentrar no trabalho. Ter edição de fotos, vetores e layout em um único app significa menos trocas, menos interrupções e mais tempo dedicado a projetar e criar os detalhes que fazem a diferença." nome="Veronica Fuerte" cargo="Fundadora e Diretora Criativa da Hey" empresa="Hey"/>
      <Cards />
      <Depoimento texto="Na reformulação da marca da BBH, o Cavalry virou nosso superpoder secreto, transformando a experimentação tipográfica em um processo criativo que definiu toda a linguagem de movimento da marca. Isso nos deu a liberdade de explorar layouts e comportamentos tipográficos que levariam dias para prototipar, tudo em uma única tarde." nome="Oded Shein" cargo="Diretor de Design, BBH" empresa="BBH"/>
      <Aplicativo titulo="Acabou de sair" desc="Com base nos seus comentários, essas novidades já estão causando impacto."/>
      <Rodape />
    </>
  )
}

export default App
