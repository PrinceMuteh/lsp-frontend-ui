import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
export const metadata: Metadata = {
  title: "LSP - Speech to Text App",
  description: "Devon",
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
