import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a className="logo" href="#top" aria-label="Арт-Медика — на главную">
          <Image
            src="/logo.svg"
            alt="Арт-Медика"
            width={270}
            height={64}
            priority
          />
        </a>

        <nav className="nav" aria-label="Основная навигация">
          <a href="#about">О клинике</a>
          <a href="#services">Услуги</a>
          <a href="#specialists">Специалисты</a>
          <a href="/offers">Акции</a>
          <a href="#documents">Документы</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="header-actions">
          <p className="header-address">
            Челябинск, пр. Ленина 12а
            <br />
            ПН–СБ с 9:00 до 20:00
          </p>

          <a className="appointment-button" href="#appointment">
            Записаться
          </a>
        </div>
      </div>
    </header>
  );
}
