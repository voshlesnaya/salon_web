import Image from "next/image";

const facts = [
  { value: "10+", text: "обучений в год\nпроходят специалисты\nцентра" },
  { value: "20", text: "проектов уже было\nреализовано в нашей\nклинике" },
  { value: "90%", text: "положительных\nотзывов" },
];

export default function SurgeryHighlight() {
  return (
    <section className="surgery-highlight" aria-labelledby="surgery-heading">
      <div className="surgery-highlight-inner">
        <h2 id="surgery-heading">
          <span>Превращаем заветные мечты пациентов</span>
          <span>в реальность, невзирая на сложность задачи</span>
        </h2>

        <div className="surgery-highlight-grid">
          <div className="surgery-photo">
            <Image
              src="/surgery-room.jpg"
              alt="Операционная клиники Арт-Медика"
              fill
              sizes="(max-width: 720px) 100vw, 42vw"
            />
          </div>

          <div className="surgery-content">
            <div className="surgery-description">
              <p>Центр «Арт-Медика» — партнер ЮУГМУ, клиническая база «Межрегионального центра непрерывного медицинского и фармацевтического образования» (г. Москва). Наша клиника является участником международных проектов в направлении «Пластическая хирургия и косметология».</p>
              <p>Качество результата обеспечивают инновационное высокотехнологичное хирургическое, эндоскопическое и лазерное оборудование.</p>
            </div>

            <div className="surgery-facts" aria-label="Показатели клиники">
              {facts.map((fact) => (
                <article className="surgery-fact" key={fact.value}>
                  <strong>{fact.value}</strong>
                  <p>{fact.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
