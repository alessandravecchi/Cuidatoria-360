// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";

export const metadata: Metadata = {
  title: "Cuidatoria — ONG do Futuro",
  description:
    "Aceleração de 100 OSC em 6 etapas: diagnóstico, regularização, capacitação, projetos, prestação de contas e certificação.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Cuidatoria — ONG do Futuro",
    description:
      "Aceleração de 100 OSC em 6 etapas: diagnóstico, regularização, capacitação, projetos, prestação de contas e certificação.",
    url: siteUrl,
    images: ["/og.jpg"], // coloque um og.jpg em /public (1200x630)
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuidatoria — ONG do Futuro",
    description:
      "Aceleração de 100 OSC em 6 etapas: diagnóstico, regularização, capacitação, projetos, prestação de contas e certificação.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

