import Image from "next/image";

const statistics = [
  { value: "20", label: "лет опыта работы\nв сфере медицины" },
  { value: "20", label: "видов медицинских\nнаправлений деятельности" },
  { value: "40+", label: "квалифицированных\nспециалистов" },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image
        className="hero-image"
        src="/hero-consultation.png"
        alt="Врач консультирует пациентку"
        fill
        priority
        sizes="100vw"
      />

      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-copy">
          <h1 id="hero-title">Ваше здоровье — наша забота</h1>
          <p>Медико-косметологический центр с современным оборудованием и опытными специалистами</p>
        </div>

        <div className="hero-statistics" aria-label="Преимущества центра">
          {statistics.map(({ value, label }) => (
            <article className="stat-card" key={value + label}>
              <strong>{value}</strong>
              <p>{label}</p>
            </article>
          ))}
        </div>
      </div>

      <a className="hero-call" href="tel:+73512200000" aria-label="Позвонить в клинику">
        <Image src="/icon-phone.svg" alt="" width={36} height={36} aria-hidden="true" />
      </a>
    </section>
  );
}
