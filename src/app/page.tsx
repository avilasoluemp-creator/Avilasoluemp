import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";

const services = [
  {
    number: "01",
    slug: "sistemas-personalizados",
    icon: "⌘",
    title: "Sistemas personalizados",
    description:
      "Desenvolvemos sistemas sob medida para organizar processos, integrar informações e resolver desafios específicos da sua empresa.",
  },
  {
    number: "02",
    slug: "sites-institucionais",
    icon: "◈",
    title: "Sites institucionais",
    description:
      "Criamos experiências digitais profissionais para fortalecer sua marca, apresentar seus serviços e conquistar novos clientes.",
  },
  {
    number: "03",
    slug: "crm-erp",
    icon: "▦",
    title: "CRM e ERP",
    description:
      "Soluções para gestão empresarial, relacionamento com clientes, controle operacional e tomada de decisões.",
  },
  {
    number: "04",
    slug: "automacao-empresarial",
    icon: "⟳",
    title: "Automação empresarial",
    description:
      "Automatizamos tarefas e processos para reduzir atividades manuais, melhorar a produtividade e ganhar eficiência.",
  },
];

export default function Home() {
  return (
    <>
      {/* HEADER */}

      <Header />

      <main>
        {/* HERO */}

        <section className="hero" id="inicio">
          <div className="container hero-inner">
            <div className="hero-content">
              <span className="eyebrow hero-eyebrow">
                TECNOLOGIA · ESTRATÉGIA · INOVAÇÃO
              </span>

              <h1 className="hero-title">
                Transformamos ideias em <span>soluções digitais.</span>
              </h1>

              <p className="hero-description">
                Desenvolvemos sistemas, plataformas e experiências digitais que
                conectam tecnologia às necessidades reais do seu negócio.
              </p>

              <div className="hero-actions">
                <Link href="#servicos" className="button-primary">
                  Conheça nossas soluções <span>→</span>
                </Link>

                <Link href="#sobre" className="button-secondary">
                  Conheça a Ávila
                </Link>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="visual-orbit" />

              <div className="visual-card">
                <div className="visual-card-top">
                  <span className="visual-card-label">
                    ÁVILA DIGITAL ECOSYSTEM
                  </span>
                  <span className="visual-status" />
                </div>

                <h2 className="visual-card-title">Tecnologia com propósito.</h2>

                <p className="visual-card-description">
                  Soluções digitais desenvolvidas para acompanhar a evolução dos
                  negócios.
                </p>

                <div className="visual-metrics">
                  <div className="metric">
                    <div className="metric-number">01</div>
                    <div className="metric-label">Estratégia</div>
                  </div>

                  <div className="metric">
                    <div className="metric-number">02</div>
                    <div className="metric-label">Tecnologia</div>
                  </div>

                  <div className="metric">
                    <div className="metric-number">03</div>
                    <div className="metric-label">Desenvolvimento</div>
                  </div>

                  <div className="metric">
                    <div className="metric-number">04</div>
                    <div className="metric-label">Evolução</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POSICIONAMENTO */}

        <section className="trust-strip">
          <div className="container trust-inner">
            <div className="trust-item">
              <span className="trust-number">01</span>
              <span className="trust-label">
                Tecnologia alinhada aos objetivos do negócio
              </span>
            </div>

            <div className="trust-item">
              <span className="trust-number">02</span>
              <span className="trust-label">
                Soluções pensadas para cada necessidade
              </span>
            </div>

            <div className="trust-item">
              <span className="trust-number">03</span>
              <span className="trust-label">
                Desenvolvimento com visão de longo prazo
              </span>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}

        <section className="section services" id="servicos">
          <div className="container">
            <span className="eyebrow">NOSSAS SOLUÇÕES</span>

            <h2 className="section-title">
              Tecnologia para cada etapa da evolução da sua empresa.
            </h2>

            <p className="section-description">
              Combinamos conhecimento técnico e visão empresarial para
              desenvolver soluções digitais que fazem sentido para a realidade
              de cada negócio.
            </p>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-icon">{service.icon}</div>

                  <span className="eyebrow">SOLUÇÃO {service.number}</span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <Link
                    href={`/servicos/${service.slug}`}
                    className="service-link"
                    aria-label={`Saiba mais sobre ${service.title}`}
                  >
                    Saiba mais <span>↗</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}

        <section className="section about" id="sobre">
          <div className="container about-inner">
            <div className="about-visual">
              <div className="about-visual-content">
                <div className="about-monogram">Á.</div>
                <p>
                  INTELIGÊNCIA DIGITAL
                  <br />
                  PARA NEGÓCIOS REAIS
                </p>
              </div>
            </div>

            <div className="about-copy">
              <span className="eyebrow">SOBRE A ÁVILA</span>

              <h2 className="section-title">
                Mais do que desenvolver tecnologia, queremos transformar a
                maneira como empresas evoluem.
              </h2>

              <p>
                A Ávila Soluções Empresariais nasce com o propósito de aproximar
                a tecnologia da realidade das empresas. Acreditamos que
                ferramentas digitais devem simplificar processos, ampliar
                possibilidades e gerar valor.
              </p>

              <p>
                Por isso, desenvolvemos soluções que consideram as necessidades,
                os desafios e os objetivos de cada negócio.
              </p>

              <Link href="#contato" className="about-link">
                Vamos conversar sobre seu projeto ↗
              </Link>
            </div>
          </div>
        </section>

        {/* CONTATO */}

        <section className="section cta" id="contato">
          <div className="container cta-inner">
            <div>
              <span className="eyebrow hero-eyebrow">
                SEU PRÓXIMO PROJETO COMEÇA AQUI
              </span>

              <h2 className="section-title">
                Sua empresa está pronta para evoluir?
              </h2>

              <p>
                Vamos conversar sobre suas necessidades e descobrir como a
                tecnologia pode ajudar seu negócio.
              </p>
            </div>

            <div className="cta-actions">
              <a
                href="https://wa.me/5554991640157?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20um%20projeto%20com%20a%20%C3%81vila."
                className="button-primary"
                target="_blank"
                rel="noreferrer"
              >
                Fale com a Ávila pelo WhatsApp ↗
              </a>
              <a
                href="mailto:avilasoluemp@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento"
                className="button-secondary"
              >
                Envie um e-mail
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <Link href="/" className="brand footer-brand" aria-label="Ávila - Página inicial">
                <Image
                  src="/brand/logo-reverse.svg"
                  alt="Ávila Soluções Empresariais"
                  width={920}
                  height={210}
                  className="brand-logo footer-logo"
                />
              </Link>

              <p className="footer-description">
                Tecnologia, estratégia e desenvolvimento de soluções digitais
                para empresas que desejam evoluir.
              </p>
            </div>

            <div>
              <h3 className="footer-heading">NAVEGAÇÃO</h3>

              <div className="footer-links">
                <Link href="#inicio">Início</Link>
                <Link href="#servicos">Soluções</Link>
                <Link href="#sobre">Sobre nós</Link>
                <Link href="#contato">Contato</Link>
              </div>
            </div>

            <div>
              <h3 className="footer-heading">SOLUÇÕES</h3>

              <div className="footer-links">
                {services.map((service) => (
                  <Link href={`/servicos/${service.slug}`} key={service.slug}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © 2026 Ávila Soluções Empresariais. Todos os direitos reservados.
            </span>

            <span>Desenvolvido com tecnologia e propósito.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
