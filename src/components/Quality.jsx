function Quality() {
  const spisok = [1, 2, 3, 4];

  return (
    <section className="zelenyj-blok">
      <h2 className="zagolovok-belyj">HR Production of the Highest Quality</h2>

      <div className="ikonki-ryad">
        {spisok.map((id) => (
          <div key={id} className="ikonka-blok">
            <div className="ikonka">картинку вставь сюда</div>
            <p className="ikonka-tekst">
              Educates & Informs Employee Expectations
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Quality;