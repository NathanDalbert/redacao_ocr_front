import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Detector de Texto em Redações"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-gray-950 text-white`}>{children}</body>
    </html>
  );
}
