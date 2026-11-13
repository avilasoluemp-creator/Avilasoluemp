import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Header from "../../components/Header";

const services = {
  "sistemas-personalizados": {
    number: "01",
    eyebrow: "DESENVOLVIMENTO SOB MEDIDA",
    title: "Sistemas personalizados",
    subtitle: "Tecnologia desenvolvida para a realidade da sua empresa.",
    description:
      "Desenvolvemos sistemas personalizados para organizar operações, integrar informações e transformar necessidades específicas em soluções digitais.",
    benefits: [
      {
        title: "Processos organizados",
        description:
          "Soluções alinhadas ao funcionamento da empresa, reduzindo controles dispersos e atividades desnecessárias.",
      },
      {
        title: "Informações integradas",
        description:
          "Centralização de dados e conexão entre diferentes etapas da operação.",
      },
      {
        title: "Funcionalidades sob medida",
        description:
          "Recursos planejados conforme as necessidades e prioridades de cada projeto.",
      },
      {
        title: "Evolução contínua",
        description:
          "Estrutura preparada para receber melhorias conforme o negócio evolui.",
      },
    ],
    applications: [
      "Sistemas internos de gestão",
      "Plataformas administrativas",
      "Painéis e indicadores empresariais",
      "Portais e ambientes personalizados",
      "Integração entre sistemas",
      "Digitalização de processos",
    ],
  },

  "sites-institucionais": {
    number: "02",
    eyebrow: "PRESENÇA DIGITAL",
    title: "Sites institucionais",
    subtitle: "Uma presença digital profissional para fortalecer sua marca.",
    description:
      "Desenvolvemos experiências digitais que apresentam seu negócio com clareza, valorizam sua identidade e facilitam o contato com potenciais clientes.",
    benefits: [
      {
        title: "Imagem profissional",
        description:
          "Uma apresentação digital coerente com o posicionamento e a identidade da empresa.",
      },
      {
        title: "Experiência responsiva",
        description:
          "Navegação planejada para computadores, tablets e celulares.",
      },
      {
        title: "Comunicação estratégica",
        description:
          "Conteúdo organizado para apresentar serviços e diferenciais.",
      },
      {
        title: "Estrutura para SEO",
        description:
          "Organização técnica para favorecer a compreensão do site pelos mecanismos de busca.",
      },
    ],
    applications: [
      "Sites institucionais",
      "Sites de apresentação de serviços",
      "Landing pages comerciais",
      "Páginas de captação de contatos",
      "Portfólios digitais",
      "Páginas para campanhas",
    ],
  },

  "crm-erp": {
    number: "03",
    eyebrow: "GESTÃO EMPRESARIAL",
    title: "CRM e ERP",
    subtitle: "Mais controle sobre clientes, processos e gestão empresarial.",
    description:
      "Projetamos soluções CRM e ERP para apoiar o relacionamento com clientes, o controle operacional e a administração das atividades da empresa.",
    benefits: [
      {
        title: "Visão centralizada",
        description:
          "Organização das informações para reduzir a fragmentação dos controles empresariais.",
      },
      {
        title: "Relacionamento com clientes",
        description:
          "Acompanhamento de contatos, oportunidades e etapas comerciais.",
      },
      {
        title: "Controle operacional",
        description:
          "Organização de rotinas administrativas, financeiras e operacionais.",
      },
      {
        title: "Apoio à decisão",
        description:
          "Informações estruturadas para facilitar o acompanhamento da empresa.",
      },
    ],
    applications: [
      "Gestão de clientes e contatos",
      "Oportunidades comerciais",
      "Controle financeiro",
      "Gestão de produtos e estoque",
      "Organização de processos internos",
      "Relatórios gerenciais",
    ],
  },

  "automacao-empresarial": {
    number: "04",
    eyebrow: "PROCESSOS INTELIGENTES",
    title: "Automação empresarial",
    subtitle: "Menos tarefas repetitivas. Mais eficiência nos processos.",
    description:
      "Desenvolvemos soluções de automação para conectar etapas de trabalho, organizar fluxos e reduzir tarefas repetitivas.",
    benefits: [
      {
        title: "Menos tarefas manuais",
        description:
          "Identificação de atividades repetitivas que podem ser simplificadas ou automatizadas.",
      },
      {
        title: "Fluxos organizados",
        description:
          "Processos estruturados com etapas e responsabilidades mais claras.",
      },
      {
        title: "Integração de ferramentas",
        description:
          "Conexão entre sistemas e compartilhamento de informações.",
      },
      {
        title: "Mais previsibilidade",
        description:
          "Rotinas padronizadas que facilitam o acompanhamento das atividades.",
      },
    ],
    applications: [
      "Rotinas administrativas",
      "Integração entre plataformas",
      "Notificações automáticas",
      "Fluxos de aprovação",
      "Sincronização de informações",
      "Automação de processos comerciais",
    ],
  },
};

type ServiceSlug = keyof typeof services;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!(slug in services)) {
    return { title: "Serviço não encontrado" };
  }

  const service = services[slug as ServiceSlug];

  return {
    title: service.title,
    description: service.subtitle,
  };
}

function ServicePageFallback() {
  return <main className={styles.main} aria-busy="true" />;
}

export default function ServicePage({ params }: PageProps) {
  return (
    <Suspense fallback={<ServicePageFallback />}>
      <ServiceContent params={params} />
    </Suspense>
  );
}

async function ServiceContent({ params }: PageProps) {
  const { slug } = await params;

  if (!(slug in services)) {
    notFound();
  }

  const service = services[slug as ServiceSlug];

  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div>
              <Link href="/#servicos" className={styles.backLink}>
                ← Voltar para soluções
              </Link>

              <span className={styles.eyebrow}>{service.eyebrow}</span>

              <h1 className={styles.heroTitle}>{service.title}.</h1>

              <p className={styles.heroLead}>{service.subtitle}</p>

              <p className={styles.heroDescription}>{service.description}</p>

              <div className={styles.actions}>
                <Link href="/#contato" className={styles.primaryButton}>
                  Solicitar um orçamento ↗
                </Link>

                <Link href="#beneficios" className={styles.secondaryButton}>
                  Conheça nossas soluções
                </Link>
              </div>
            </div>

            <div className={styles.visual} aria-hidden="true">
              <span className={styles.visualNumber}>{service.number}</span>
              <div className={styles.visualLine} />
              <span className={styles.visualLabel}>
                ÁVILA SOLUÇÕES EMPRESARIAIS
              </span>
              <h2 className={styles.visualTitle}>
                Tecnologia alinhada aos objetivos do negócio.
              </h2>
              <div className={styles.visualFooter}>
                <span>ESTRATÉGIA</span>
                <span>TECNOLOGIA</span>
                <span>EVOLUÇÃO</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="beneficios">
          <div className="container">
            <span className={styles.eyebrow}>O QUE PODEMOS DESENVOLVER</span>

            <h2 className={styles.sectionTitle}>
              Soluções pensadas para necessidades reais.
            </h2>

            <p className={styles.sectionDescription}>
              Cada projeto é definido conforme o contexto, as prioridades e os
              objetivos da empresa.
            </p>

            <div className={styles.benefitsGrid}>
              {service.benefits.map((benefit, index) => (
                <article className={styles.benefitCard} key={benefit.title}>
                  <span className={styles.cardNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.applications}>
          <div className={`container ${styles.applicationsGrid}`}>
            <div>
              <span className={styles.eyebrow}>POSSIBILIDADES</span>

              <h2 className={styles.sectionTitle}>
                Onde essa solução pode fazer a diferença.
              </h2>

              <p className={styles.sectionDescription}>
                O escopo é definido em conjunto, considerando a realidade da
                operação e os resultados que a empresa busca alcançar.
              </p>
            </div>

            <ul className={styles.applicationList}>
              {service.applications.map((application) => (
                <li key={application}>
                  <span aria-hidden="true">↗</span>
                  {application}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={`container ${styles.ctaInner}`}>
            <div>
              <span className={styles.ctaEyebrow}>
                SEU PRÓXIMO PROJETO COMEÇA AQUI
              </span>

              <h2>Vamos encontrar a solução certa para sua empresa?</h2>

              <p>
                Conte um pouco sobre sua necessidade e vamos conversar sobre seu
                projeto.
              </p>
            </div>

            <Link href="/#contato" className={styles.ctaButton}>
              Fale com a Ávila ↗
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <Link href="/" className="brand">
                <span className="brand-name">ÁVILA.</span>
                <span className="brand-subtitle">SOLUÇÕES EMPRESARIAIS</span>
              </Link>

              <p className="footer-description">
                Tecnologia, estratégia e desenvolvimento de soluções digitais
                para empresas que desejam evoluir.
              </p>
            </div>

            <div>
              <h3 className="footer-heading">NAVEGAÇÃO</h3>
              <div className="footer-links">
                <Link href="/#inicio">Início</Link>
                <Link href="/#servicos">Soluções</Link>
                <Link href="/#sobre">Sobre nós</Link>
                <Link href="/#contato">Contato</Link>
              </div>
            </div>

            <div>
              <h3 className="footer-heading">SOLUÇÕES</h3>
              <div className="footer-links">
                {Object.entries(services).map(([serviceSlug, item]) => (
                  <Link href={`/servicos/${serviceSlug}`} key={serviceSlug}>
                    {item.title}
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
