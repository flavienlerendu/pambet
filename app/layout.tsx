import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Opération Pambet — Dossier Classifié",
  description: "Archives secrètes de l'EVG de Maxime",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
