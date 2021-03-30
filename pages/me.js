const AboutPage = () => {
  return (
    <main className="flex flex-col items-center px-8 text-gray-800 pt-7 sm:justify-center sm:flex-row sm:items-start">
      <section className="flex flex-col items-center sm:h-full sm:justify-center ">
        <h1 className="text-5xl font-bold text-primary">¿Quién soy?</h1>
        <div className="pt-8 lg:px-24">
          <p className="leading-loose tracking-wide">
            Mi nombre es <strong>Yomar Gutierrez</strong>. Soy Ingeniero de Sistemas y Desarrollador
            de aplicaciones Web. Vivo en la ciudad de Valledupar, en la región norte de Colombia. Me
            gusta solucionar problemas a través de la programación. Desde que inicie en el mundo de
            Javascript y demás herramientas web, ha sido un arduo y constante aprendizaje, pero un
            camino que me ha dejado grandes conocimientos y satisfacciones.
          </p>
          <br />
          <p className="leading-loose tracking-wide">
            Disfruto del trabajo en equipo constructivo, donde cada participante es reconocido por
            sus cualidades y motivado a cumplir sus metas, en un ambiente de colaboración mutua.
          </p>
          <br />
          <p className="leading-loose tracking-wide">
            Me gusta vivir experiencias y culturas nuevas mientras practico el Running y recorro el
            país.
          </p>
        </div>
        <div className="grid grid-cols-1 pt-5 gap-y-11 md:gap-y-9 md:grid-cols-5 md:grid-rows-2 md:pt-8">
          <div className="w-8/12 mx-auto md:row-span-2 md:col-span-3 md:w-96">
            <img className="w-full h-auto shadow-lg" src="/running.jpg" alt="running" />
          </div>
          <div className="w-8/12 mx-auto md:w-44 md:col-span-2">
            <img className="w-full h-auto shadow-lg" src="/travel.jpg" alt="travel" />
          </div>
          <div className="w-8/12 mx-auto md:w-44 md:col-span-2">
            <img className="w-full h-auto shadow-lg" src="/conf.jpg" alt="travel" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
