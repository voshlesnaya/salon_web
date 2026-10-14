"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type TabOption = { label: string; value: string };
type CardItem = { image: string; title: string; text: string; group: string };

const resultTabs: TabOption[] = [
  { label: "Все", value: "all" }, { label: "Блефаропластика", value: "eyes" },
  { label: "Ринопластика", value: "nose" }, { label: "Фейслифтинг", value: "face" },
  { label: "Коррекция губ", value: "lips" }, { label: "Нитевой лифтинг", value: "threads" },
  { label: "Маммопластика", value: "breast" }, { label: "Липосакция", value: "body" },
];

const results: CardItem[] = [
  { image: "/result-rhinoplasty-before-after.png", title: "Ринопластика", text: "До и после процедуры", group: "nose" },
  { image: "/result-face-before-after.png", title: "Блефаропластика", text: "До и после процедуры", group: "eyes" },
  { image: "/result-body-before-after.png", title: "Липосакция", text: "До и после процедуры", group: "body" },
  { image: "/result-rhinoplasty-before-after.png", title: "Ринопластика", text: "До и после процедуры", group: "nose" },
  { image: "/result-face-before-after.png", title: "Фейслифтинг", text: "До и после процедуры", group: "face" },
  { image: "/result-body-before-after.png", title: "Коррекция тела", text: "До и после процедуры", group: "body" },
];

const specialistTabs: TabOption[] = [
  { label: "Все", value: "all" }, { label: "Руководство", value: "management" },
  { label: "Поликлиническое отделение", value: "clinic" }, { label: "Хирургия", value: "surgery" },
  { label: "Эстетическая гинекология", value: "gynecology" }, { label: "Косметология", value: "cosmetology" },
  { label: "Дерматология", value: "dermatology" }, { label: "Лор-хирургия", value: "ent" },
];

const specialists: CardItem[] = [
  { image: "/doctor-kushentsova.png", title: "Кузнецова Ирина Сергеевна", text: "Директор ООО «МКЦ «Арт-Медика», врач-организатор здравоохранения, дерматовенеролог, косметолог.", group: "management" },
  { image: "/doctor-busygina.png", title: "Бусыгина Анастасия Петровна", text: "Заведующая амбулаторно-поликлиническим отделением, врач-дерматовенеролог, косметолог, трихолог.", group: "clinic" },
  { image: "/doctor-perevezentsev.png", title: "Перевезенцев Юрий Юрьевич", text: "Заведующий стационарным отделением пластической хирургии, врач пластический хирург, кандидат медицинских наук.", group: "surgery" },
  { image: "/doctor-sergeeva.png", title: "Сергеева Евгения Александровна", text: "Заместитель директора по медицинской части, заведующая отделением оториноларингологии.", group: "ent" },
  { image: "/doctor-kushentsova.png", title: "Кузнецова Ирина Сергеевна", text: "Врач-косметолог и дерматовенеролог с многолетним опытом работы.", group: "cosmetology" },
  { image: "/doctor-perevezentsev.png", title: "Перевезенцев Юрий Юрьевич", text: "Врач пластический хирург, кандидат медицинских наук.", group: "surgery" },
  { image: "/doctor-busygina.png", title: "Бусыгина Анастасия Петровна", text: "Врач-косметолог, трихолог и миколог.", group: "cosmetology" },
  { image: "/doctor-sergeeva.png", title: "Сергеева Евгения Александровна", text: "Врач-оториноларинголог, фониатр.", group: "ent" },
];

const projects: CardItem[] = [
  { image: "/project-gloves.png", title: "Социальный проект «Красота в тебе»", text: "Проект для жителей Челябинской области, которые хотят преобразиться, доверив свое преображение лучшим специалистам в своей сфере. Проект имеет международный статус.", group: "Красота в тебе" },
  { image: "/project-procedure.png", title: "Доступная пластическая хирургия из Милана в России", text: "", group: "Косметология" },
  { image: "/project-procedure.png", title: "Европейская блефаропластика — комплексная программа омоложения", text: "", group: "Косметология" },
  { image: "/project-gloves.png", title: "Школа здоровья", text: "Практические знания для пациентов клиники.", group: "Проекты" },
];

const reviews = [
  { story: "К неврологу Фахрисламовой Э.Р. обращалась в первый раз. Узнала об этом специалисте на портале ПроДокторов и при выборе ориентировалась на рейтинг.", liked: "Мне полностью понравилось, как прошёл приём у Эльвиры Рифатовны. Специалист внимательно выслушала, выполнила осмотр и дала понятные рекомендации." },
  { story: "К Новиковой Татьяне Васильевне я обратилась на прием в первый раз. При выборе ориентировалась на опыт работы врача и отзывы пациентов.", liked: "Мне понравилось, что врач подробно рассказала о моей проблеме и правильно подобрала терапию. Приём проходил в спокойной и комфортной обстановке." },
  { story: "На консультации получила ответы на все вопросы и ясный план дальнейшего лечения.", liked: "Очень внимательный и деликатный врач, всё объясняет доступным языком." },
  { story: "Выбрала клинику по рекомендации близких и осталась довольна приёмом.", liked: "Современное оборудование, тактичное отношение и высокий уровень заботы." },
];

function FilterTabs({ options, value, onChange }: { options: TabOption[]; value: string; onChange: (value: string) => void }) {
  return <div className="filter-tabs" aria-label="Выбор направления">{options.map((option) => <button className={value === option.value ? "filter-tab is-active" : "filter-tab"} key={option.value} type="button" onClick={() => onChange(option.value)}>{option.label}</button>)}</div>;
}

function SectionIntro({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="showcase-intro"><a className="showcase-label" href="#top">{label}<span>↗</span></a><p>{children}</p></div>;
}

function CarouselControls({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return <div className="carousel-controls"><button type="button" aria-label="Предыдущие карточки" onClick={onBack}>←</button><button type="button" aria-label="Следующие карточки" onClick={onNext}>→</button></div>;
}

function rotate<T>(items: T[], start: number, count: number) {
  return Array.from({ length: Math.min(count, items.length) }, (_, index) => items[(start + index) % items.length]);
}

export default function ShowcaseSections() {
  const [resultFilter, setResultFilter] = useState("all");
  const [resultStart, setResultStart] = useState(0);
  const [specialistFilter, setSpecialistFilter] = useState("all");
  const [specialistStart, setSpecialistStart] = useState(0);
  const [projectStart, setProjectStart] = useState(0);
  const filteredResults = useMemo(() => resultFilter === "all" ? results : results.filter((item) => item.group === resultFilter), [resultFilter]);
  const filteredSpecialists = useMemo(() => specialistFilter === "all" ? specialists : specialists.filter((item) => item.group === specialistFilter), [specialistFilter]);
  const visibleResults = rotate(filteredResults, resultStart % filteredResults.length, 3);
  const visibleSpecialists = rotate(filteredSpecialists, specialistStart % filteredSpecialists.length, 4);
  const visibleProjects = rotate(projects, projectStart, 3);
  const visibleReviews = reviews.slice(0, 2);

  return <section className="showcase" aria-label="Материалы клиники"><div className="showcase-inner">
    <section className="showcase-section" id="results"><SectionIntro label="Результат операций">Мы гордимся результатами, которых достигаем вместе с нашими пациентами благодаря современным методикам и золотым рукам хирургов. Убедитесь сами, как тонко и естественно мы умеем работать с красотой.</SectionIntro><FilterTabs options={resultTabs} value={resultFilter} onChange={(value) => { setResultFilter(value); setResultStart(0); }} /><div className="showcase-cards result-row">{visibleResults.map((item, index) => <article className="result-card" key={`${item.title}-${index}`}><Image src={item.image} alt={item.title} fill sizes="(max-width: 720px) 85vw, 560px" /></article>)}</div><CarouselControls onBack={() => setResultStart((value) => (value - 1 + filteredResults.length) % filteredResults.length)} onNext={() => setResultStart((value) => (value + 1) % filteredResults.length)} /></section>

    <section className="showcase-section" id="specialists"><SectionIntro label="Наши специалисты">Наши специалисты — это команда профессионалов с многолетним опытом в пластической хирургии и косметологии. Они постоянно повышают своё мастерство, чтобы дарить вам гармонию, уверенность в себе и в своём теле.</SectionIntro><FilterTabs options={specialistTabs} value={specialistFilter} onChange={(value) => { setSpecialistFilter(value); setSpecialistStart(0); }} /><div className="showcase-cards specialist-row">{visibleSpecialists.map((item, index) => <article className="specialist-card" key={`${item.title}-${index}`}><Image src={item.image} alt={item.title} fill sizes="(max-width: 720px) 85vw, 415px" /><div className="specialist-gradient" /><div className="specialist-card-content"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div><CarouselControls onBack={() => setSpecialistStart((value) => (value - 1 + filteredSpecialists.length) % filteredSpecialists.length)} onNext={() => setSpecialistStart((value) => (value + 1) % filteredSpecialists.length)} /></section>

    <section className="showcase-section" id="projects"><SectionIntro label="Проекты">Подбираем для вас самые актуальные и интересные проекты из нашей практики, медицины и эстетической хирургии, с заботой о вас.</SectionIntro><div className="project-row">{visibleProjects.map((item, index) => <article className={index === 0 ? "project-card project-card-featured" : "project-card"} key={`${item.title}-${index}`}><div className="project-card-meta"><span>Проекты / {item.group}</span><b>↗</b></div><div className="project-card-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 720px) 85vw, 395px" /></div><div className="project-card-content"><h3>{item.title}</h3>{item.text && <p>{item.text}</p>}<time>07.04.2025</time></div></article>)}</div><CarouselControls onBack={() => setProjectStart((value) => (value - 1 + projects.length) % projects.length)} onNext={() => setProjectStart((value) => (value + 1) % projects.length)} /></section>

    <section className="showcase-section showcase-work" id="work"><SectionIntro label="Наша работа">Наша работа начинается с глубокой диагностики и детального планирования, а современное оборудование и сертифицированные материалы гарантируют безопасность на каждом этапе.</SectionIntro><button className="work-video" type="button" aria-label="Видео о работе клиники"><Image src="/work-rhinoplasty.png" alt="Подготовка пациентки к ринопластике" fill sizes="(max-width: 720px) 100vw, 1720px" /><span className="play-button" aria-hidden="true">▶</span></button></section>

    <section className="showcase-section" id="reviews"><SectionIntro label="Кейсы клиентов">Высокий уровень доверия и качества медицинской помощи подтверждает рейтинг нашей клиники — 4.5 на основе 118 отзывов о врачах на сайте «ПроДокторов».</SectionIntro><div className="review-grid">{visibleReviews.map((review, index) => <article className="review-card" key={`${review.story}-${index}`}><div className="review-name"><strong>Ольга</strong><span>{Array.from({ length: 5 }, (_, star) => <Image src="/icon-star.svg" alt="" width={36} height={36} key={star} />)}</span><b>↗</b></div><div className="review-columns"><div><h3>История пациента</h3><p>{review.story}</p></div><div><h3>Понравилось</h3><p>{review.liked}</p></div></div><time>07.04.2025</time></article>)}</div><CarouselControls onBack={() => undefined} onNext={() => undefined} /></section>
  </div></section>;
}
