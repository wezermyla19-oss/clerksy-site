function Steps() {
  return (
    <section className="bezhevyj-shagi">
      <h2 className="shagi-zagolovok">It's easy as 1, 2, 3</h2>
      <p className="shagi-podpis">
        Clerksy can help use your unique business needs. Here's how:
      </p>

      <div className="shagi-ryad">
        <div className="shag">
          <p className="shag-tekst">
            Fill out a form and tell us what you're looking for:
          </p>
          <p className="shag-vremya">5 minutes</p>
        </div>

        <div className="strelka"><img src="https://clerksys-sepia.vercel.app/img/arrow.png" alt="" /></div>

        <div className="shag">
          <p className="shag-tekst">
            Fill out a form and tell us what you're looking for:
          </p>
          <p className="shag-vremya">5 minutes</p>
        </div>

        <div className="strelka"><img src="https://clerksys-sepia.vercel.app/img/arrow2.png" alt="" /></div>

        <div className="shag shag-obvedennyj">
          <div className="obvodka"><img src="https://clerksys-sepia.vercel.app/img/string.png" alt="" /></div>
          <p className="shag-tekst">
            Fill out a form and tell us what you're looking for:
          </p>
          <p className="shag-vremya">5 minutes</p>
        </div>
      </div>
    </section>
  );
}

export default Steps;