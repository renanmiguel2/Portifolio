import Hero from "./components/Hero.jsx"
import Projects from "./components/Projects.jsx"
import Sobremim from "./components/Sobremim.jsx"
import Contato from "./components/Contato.jsx"

function App() {
  return (
    <div>
      <Hero />
      <main className="max-w-6xl mx-auto px-4">
        <Projects />
        <Sobremim />
        <Contato />
      </main>
    </div>
  )
}

export default App