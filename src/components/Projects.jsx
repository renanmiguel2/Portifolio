import pokedex from "../img/img-to-projects/Pokedex-img.png"
import rs7 from "../img/img-to-projects/printAudi.png"
import formulario from "../img/img-to-projects/Formulario.png"
import toDoList from "../img/img-to-projects/ToDoList.png"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Pokedex",
      description: "Site feito para mostrar os pokemons, utilizando a API do PokeAPI, onde é possível ver as informações de cada pokemon.",
      image: pokedex,
      live: "https://rnpokedex.netlify.app/",
      repo: "https://github.com/renanmiguel2/Pokedex",
    },
    {
      id: 2,
      title: "Clone da audi",
      description: "Site feito com React e tailwind inspirado no site da audi, o site conta com configurador de cores de carro, layout responsivo e menu mobile.",
      image:rs7,
      live: "https://cloneaudi.netlify.app/",
      repo: "https://github.com/renanmiguel2/Audi-rs7"
    },
    {
      id: 3,
      title: "Formulario",
      description: "Esse projeto é um formulário simples com validação de campos, onde é possível validar o email, senha, nome e outros utilizando React e Tailwind.",
      image: formulario,
      live: "https://rnformulario.netlify.app/",
      repo: "https://github.com/renanmiguel2/Formulario"
    },
    {
      id: 4,
      title: "To Do List",
      description: "Projeto de uma lista de tarefas, onde é possível adicionar, remover e marcar as tarefas como concluídas e filtrar por status utilizando React e Tailwind.",
      image: toDoList,
      live: "https://rntodolist.netlify.app/",
      repo: "https://github.com/renanmiguel2/ToDoList",
    }
  ]

  return (
    <section id="projetos" className="flex flex-col gap-8 mt-11">
        <h1 className="font-inter text-3xl md:text-4xl text-center font-extrabold gradient-title mb-10 tracking-wide">Projetos</h1>
      <div className="grid md:grid-cols-3 gap-8 mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/80 backdrop-blur rounded-2xl p-5 flex flex-col gap-4 h-90 w-full max-w-sm mb-10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-zinc-400 ">
                {project.description}
              </p>
              <div className="mt-auto flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-cyan-600 hover:opacity-80 hover:scale-105 transition-transform duration-300 ease-out  py-2 rounded-xl"
                >
                  Projeto
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-zinc-700 hover:opacity-80 hover:scale-105 transition-transform duration-200 ease-out py-2 rounded-xl"
                >
                  Código
                </a>
              </div>
            </div>
          ))}
              </div>
      </section>
  )
}

export default Projects
