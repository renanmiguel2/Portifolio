import imgHome from "../img/img-home/img-home.png"
function Hero() {
  return (
    <div className="relative min-h-screen">

      <div className="absolute inset-0 z-0">
        <img
          src={imgHome}
          alt=""
          className="w-full h-full object-cover blur-[3px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10">

        <header className="flex justify-between items-center md:px-12 pt-4">
          <h1 className="mx-auto md:mx-10 text-3xl md:text-4xl lg:text-5xl font-semibold font-inter">
            Portifó<span className="text-cyan-600">lio</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Projetos</a>
            <a href="#" className="nav-link">Sobre mim</a>
            <a href="#" className="nav-link">Contato</a>
            <a href="#">🌑</a>
          </nav>
        </header>

        <section className="mt-40 px-6 md:px-12 lg:px-16">
          <div className="text-center lg:text-left">
            <p className="text-lg md:text-xl font-medium">
              Renan Miguel
            </p>

            <h2 className="font-bold text-4xl md:text-5xl my-5">
              Front <span className="text-cyan-500">End</span>
            </h2>

            <p className="text-md md:text-lg mb-1">
              Desenvolvedor Front End focado em HTML, CSS e JavaScript.
            </p>

            <p className="text-md md:text-lg mb-6">
              Construo interfaces simples, responsivas e bem organizadas.
            </p>

            <button className="bg-personality py-3.5 px-12 rounded-2xl hover:opacity-90 transition duration-300 hover:scale-105 cursor-pointer">
              Ver projetos
            </button>
          </div>
        </section>
      </div>

      <div className="hidden sm:block absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </div>
  )
}
export default Hero