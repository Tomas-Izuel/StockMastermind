import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StockMastermind",
  description: "StockMastermind es una plataforma de gestion de control de inventario y prediccion de demanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
