import github from "../img/img-contato/github.png"
import linkedin from "../img/img-contato/linkedin.png"
import email from "../img/img-contato/gmail.png"
function Contato() {
    const contatos = [
        { icon: email, titulo: "Email", link: "mailto:renanmiguel19900@gmail.com", meuGmail: "renanmiguel19900@gmail.com" },
        { icon: linkedin, titulo: "Linkedin", link: "https://www.linkedin.com/in/renanmiguel2/" },
        { icon: github, titulo: "Github", link: "https://github.com/renanmiguel2" },
    ]
    return (
        <section className=" text-white px-6 py-20" id="contato">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold titulo mb-8 gradient-title">Contato</h2>
                    <h3 className="text-xl md:text-3xl font-bold contato-h2">Vamos trabalhar juntos?</h3>
                    <p className="text-zinc-400 mt-7 max-w-xl mx-auto">
                        Interessado em trabalhar comigo? Entre em contato para conversarmos sobre projetos, oportunidades ou parcerias.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
                    {contatos.map((contato) => (
                        <div key={contato.titulo} className="flex flex-col px-5 py-6 md:py-4 mx-5 bg-zinc-800 border rounded-xl border-zinc-700
                            hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300 ease-out gap-2 mb-3">

                            <a href={contato.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-start gap-2">
                                <img src={contato.icon} alt={contato.titulo} className="w-8 h-8 md:w-10 md:h-10" />
                                <div className="flex flex-col">
                                    <p>{contato.titulo}</p>
                                    {contato.meuGmail && <p className="text-zinc-400 text-xs md:text-sm break-all">{contato.meuGmail}</p>}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>


            <footer className="mt-20 border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
                <p>© 2026 Renan Miguel. Todos os direitos reservados.</p>
                <div className="flex justify-center gap-6 mt-4">
                    {contatos.map((contato) => (
                        <a key={contato.titulo} href={contato.link} target="_blank" rel="noopener noreferrer" className="hover:text-white duration-200 ease-out">{contato.titulo}</a>
                    ))}
                </div>
            </footer>
        </section >
    );
}

export default Contato;
