import type { Metadata } from 'next';
import { Fraunces, Montserrat } from 'next/font/google';
import './globals.css';

const sans = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
});

const serif = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Safra Restaurante',
  description: 'Um toque moderno inspirado na tradição da cozinha Portuguesa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${sans.variable} ${serif.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
