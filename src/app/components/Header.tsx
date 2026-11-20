import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Ávila - Página inicial">
          <Image
            src="/brand/logo-horizontal.svg"
            alt="Ávila Soluções Empresariais"
            width={920}
            height={210}
            className="brand-logo header-logo"
            priority
          />
        </Link>

        <nav className="navigation" aria-label="Navegação principal">
          <Link href="/#inicio">Início</Link>
          <Link href="/#servicos">Soluções</Link>
          <Link href="/#sobre">Sobre nós</Link>
          <Link href="/#processo">Como trabalhamos</Link>
          <Link href="/#contato">Contato</Link>
        </nav>

        <Link href="/#contato" className="header-contact">
          Solicitar orçamento ↗
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu de navegação">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Navegação mobile">
            <Link href="/#inicio">Início</Link>
            <Link href="/#servicos">Soluções</Link>
            <Link href="/#sobre">Sobre nós</Link>
            <Link href="/#processo">Como trabalhamos</Link>
            <Link href="/#contato">Contato</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
