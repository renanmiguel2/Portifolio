import css from "../img/img-to-about/Css.png"
import html from "../img/img-to-about/Html5.png"
import javascript from "../img/img-to-about/JavaScript-normal.png"
import react from "../img/img-to-about/React.png"

function Sobremim() {
    const skills = [
        { name: "HTML", image: html },
        { name: "CSS", image: css },
        { name: "JavaScript", image: javascript },
        { name: "React", image: react },
    ]

    return (
        <section className="w-full px-6 py-28">
            <div className="max-w-4xl mx-auto">
                
                <h1 className="font-inter text-3xl md:text-4xl text-center font-extrabold mb-18 gradient-title tracking-wide">
                    Sobre mim
                </h1>

                <div className="space-y-4 text-zinc-200 font-medium text-sm md:text-base leading-7 max-w-3xl mx-auto">
                    <p>
                        Sou desenvolvedor Front End com foco em React e Tailwind CSS.
                        Gosto de criar interfaces limpas, responsivas e com código bem organizado.
                    </p>

                    <p>
                        Atualmente estudo e desenvolvo projetos próprios para evoluir na prática,
                        sempre buscando melhorar performance, acessibilidade e experiência do usuário.
                    </p>

                    <p>
                        Estou em busca da minha primeira oportunidade como desenvolvedor júnior,
                        onde eu possa aprender, contribuir e crescer profissionalmente.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex items-center-safe justify-center py-2 px-2 rounded-xl
                            bg-zinc-900/60 border border-zinc-800
                            hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300 ease-out gap-2"
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-11 h-11"
                            />
                            <span className="text-sm text-zinc-200 font-medium">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Sobremim
