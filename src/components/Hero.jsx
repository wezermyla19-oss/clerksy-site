function Hero() {
  return (
    <section className="zelenyj-fon">
      <header className="shapka">
        <div className="logo"><img src="https://clerksys-sepia.vercel.app/img/logo.png" alt></img></div>

        <nav className="knopki">
          <a href="#" className="ssylka-vhod">Log In</a>
          <a href="tel:8443326440" className="ssylka-nomer">844-332-6440</a>
          <button className="knopka-poehali">Get Started</button>
        </nav>
      </header>

      <main className="glavnoe">
        <div className="tekst">
          <h1 className="zagolovok-bomba">
            Running the show has never been so easy.
          </h1>
          <p className="podpis-melkij">
            Ready to put the human back in HR? Clerksy helps you set the stage
            with an inclusive and compliant workplace.
          </p>
        </div>

        <div className="kartinka"><img src='https://clerksys-sepia.vercel.app/img/hero.png'></img></div>
      </main>
    </section>
  );
}

export default Hero;