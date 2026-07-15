import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
