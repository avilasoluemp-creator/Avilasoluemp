import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://avilasolucoes.com.br";

const serviceSlugs = [
  "sistemas-personalizados",
  "sites-institucionais",
  "crm-erp",
  "automacao-empresarial",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    ...serviceSlugs.map((slug) => ({
      url: `${siteUrl}/servicos/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
