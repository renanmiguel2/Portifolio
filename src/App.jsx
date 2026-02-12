import Contato from "./components/Contato.jsx"
import Hero from "./components/Hero.jsx"
import Projects from "./components/Projects.jsx"
import Sobremim from "./components/Sobremim.jsx"

function App() {
  return (
    <div>
      <Hero />
      <main className="max-w-6xl mx-auto px-5">
        <Projects />
        <Sobremim />
        <Contato />
      </main>
    </div>
  )
}

export default App