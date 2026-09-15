import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  metadataBase: new URL('https://anthony-ramirez.org'),
  title: "Anthony Scott Ramirez | Desarrollador Backend & DevOps (Linux, Docker, Node.js)",
  description: "Portafolio profesional de Anthony Scott Ramirez Sias — Desarrollador Backend & DevOps. Especialista en Ubuntu Server, Docker, cloudflared, scripts de automatización con Python, Node.js, NestJS y Flutter. Graduado de SENATI.",
  keywords: [
    "Anthony Scott Ramirez",
    "Desarrollador Backend",
    "DevOps",
    "Ubuntu Server",
    "Docker",
    "cloudflared",
    "Python Automatización",
    "Node.js",
    "NestJS",
    "APIs REST",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Flutter",
    "SENATI",
    "Perú"
  ],
  authors: [{ name: "Anthony Scott Ramirez Sias" }],
  openGraph: {
    title: "Anthony Scott Ramirez | Desarrollador Backend & DevOps",
    description: "Portafolio profesional — Backend, Servidores Linux, Docker, cloudflared, Python y Flutter.",
    url: "https://anthony-ramirez.org",
    siteName: "Anthony Scott Portfolio",
    images: [
      {
        url: "/img/Yo.png",
        width: 800,
        height: 800,
        alt: "Anthony Scott Ramirez Sias",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

