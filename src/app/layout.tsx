import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://avilasolucoes.com.br",
);

export const metadata: Metadata = {
  title: {
    default: "Ávila Soluções Empresariais | Tecnologia e Inovação",
    template: "%s | Ávila Soluções Empresariais",
  },
  description:
    "Desenvolvemos sistemas personalizados, sites institucionais, plataformas CRM e ERP e soluções de automação empresarial.",
  keywords: [
    "Ávila Soluções Empresariais",
    "desenvolvimento de sistemas",
    "criação de sites",
    "CRM",
    "ERP",
    "automação empresarial",
  ],
  applicationName: "Ávila Soluções Empresariais",
  metadataBase: siteUrl,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Ávila Soluções Empresariais",
    title: "Ávila Soluções Empresariais | Tecnologia e Inovação",
    description:
      "Soluções digitais para empresas que desejam evoluir com tecnologia, estratégia e inovação.",
  },
  twitter: {
    card: "summary",
    title: "Ávila Soluções Empresariais | Tecnologia e Inovação",
    description:
      "Soluções digitais para empresas que desejam evoluir com tecnologia, estratégia e inovação.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ávila Soluções Empresariais",
              description: "Soluções digitais para empresas: sistemas personalizados, sites, CRM, ERP e automação empresarial.",
              url: siteUrl.toString(),
              email: "avilasoluemp@gmail.com",
              contactPoint: { "@type": "ContactPoint", telephone: "+55 54 99164-0157", contactType: "customer service", availableLanguage: "Portuguese" },
            }),
          }}
        />
      </body>
    </html>
  );
}
