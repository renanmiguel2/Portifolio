import apple from "../img/img-to-projects/appleProjects.png"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Apple",
      description: "Site feito pra exercitar os conhecimentos de React e Tailwind",
      image: apple,
      live: "https://renanmiguel2.github.io/Apple/",
      repo: "https://github.com/renanmiguel2/Apple",
    },
  ]

  return (
    <div className="flex flex-col gap-8 mt-11">
        <h1 className="font-inter text-3xl md:text-4xl text-center font-extrabold gradient-title mb-10 tracking-wide">Projetos</h1>
      <div className="flex flex-col md:flex-row gap-8 mx-auto">
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
              <p className="text-sm text-zinc-400 line-clamp-3">
                {project.description}
              </p>
              <div className="mt-auto flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex-1 text-center bg-cyan-600 hover:opacity-80 hover:scale-105 transition-transform duration-300 ease-out  py-2 rounded-xl"
                >
                  Projeto
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  className="flex-1 text-center bg-zinc-700 hover:opacity-80 hover:scale-105 transition-transform duration-200 ease-out py-2 rounded-xl"
                >
                  Código
                </a>
              </div>
            </div>
          ))}
              </div>
      </div>
  )
}

export default Projects
